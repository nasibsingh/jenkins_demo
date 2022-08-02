/* eslint-disable no-use-before-define */
const { Router } = require('express');
const HttpMethod = require('./httpMethod');
const { HttpException, formatErrorResponse } = require('../../utils');
const { isApplicableFeatureLevel } = require('./featureLevel');
const { verifyToken } = require('../middlewares');
const { Authentication } = require('../../auth');
const { SecurityService } = require('../../services');

const route = Router();


/**
 * Map the PUBLIC UNAUTHENTICATED route for HTTP GET requests
 *
 * @param path  the path
 * @param callback The callback
 */
const publicGet = (level, path, callback, middlewares) => {
  initPublicRoute(level, path, HttpMethod.get, callback, middlewares);
};

/**
 * Map the PUBLIC UNAUTHENTICATED route for HTTP POST requests
 *
 * @param path  the path
 * @param callback The callback
 */
const publicPost = (level, path, callback, middlewares) => {
  initPublicRoute(level, path, HttpMethod.post, callback, middlewares);
};

/**
 * Map the PUBLIC UNAUTHENTICATED route for HTTP PUT requests
 *
 * @param path  the path
 * @param callback The callback
 */
const publicPut = (level, path, callback, middlewares) => {
  initPublicRoute(level, path, HttpMethod.put, callback, middlewares);
};

/**
 * Map the PUBLIC UNAUTHENTICATED route for HTTP DELETE requests
 *
 * @param path  the path
 * @param callback The callback
 */
const publicDelete = (level, path, callback, middlewares) => {
  initPublicRoute(level, path, HttpMethod.delete, callback, middlewares);
};

/**
 * Map the route for HTTP GET requests
 *
 * @param path  the path
 * @param callback The callback
 */
const get = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.get, callback, middlewares);
};

/**
 * Map the route for HTTP POST requests
 *
 * @param path  the path
 * @param callback The callback
 */
const post = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.post, callback, middlewares);
};

/**
 * Map the route for HTTP PUT requests
 *
 * @param path  the path
 * @param callback The callback
 */
const put = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.put, callback, middlewares);
};

/**
 * Map the route for HTTP PATCH requests
 *
 * @param path  the path
 * @param callback The callback
 */
const patch = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.patch, callback, middlewares);
};

/**
 * Map the route for HTTP DELETE requests,
 * can't name it as delete as it is reserved keyword
 *
 * @param path  the path
 * @param callback The callback
 */
const deleteMethod = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.delete, callback, middlewares);
};

/**
 * Map the route for HTTP HEAD requests
 *
 * @param path  the path
 * @param callback The callback
 */
const head = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.head, callback, middlewares);
};

/**
 * Map the route for HTTP TRACE requests
 *
 * @param path  the path
 * @param callback The callback
 */
const trace = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.trace, callback, middlewares);
};

/**
 * Map the route for HTTP OPTIONS requests
 *
 * @param path  the path
 * @param callback The callback
 */
const options = (level, right, path, callback, middlewares) => {
  initRouteWith(level, right, path, HttpMethod.options, callback, middlewares);
};


const initPublicRoute = (level, path, method, callback, middlewares = []) => {
  if (isApplicableFeatureLevel(level)) {
    logInitialization(path, method);
    route[method](path, [...middlewares], async (req, res, next) => {
      try {
        const data = await callback(req, res, next);
        if (data) {
          return res.json(data).status(200);
        }
        throw new HttpException.BadRequest(formatErrorResponse('general', 'noDataFound'));
      } catch (err) {
        return next(err);
      }
    });
  }
};

const initRouteWith = (level, right, path, method, callback, middlewares = []) => {
  if (isApplicableFeatureLevel(level)) {
    logInitialization(path, method);
    route[method](path, [verifyToken, ...middlewares], async (req, res, next) => {
      try {
        const { currentUser } = req;
        if (!(currentUser
                && Authentication.hasPermission(req.currentUser.rights || [], right))) {
          throw new HttpException.Forbidden(formatErrorResponse('authToken', 'notAuthorised'));
        }
        const data = await callback(req, res, next);
        if (data) {
          const updatedToken = SecurityService.updateToken(
            req.ip, currentUser.email,
            currentUser.tokenAud, currentUser.tokenType,
          );
          res.setHeader('Authorization', `Bearer ${updatedToken}`);
          return res.json(data).status(200);
        }
        throw new HttpException.BadRequest(formatErrorResponse('general', 'noDataFound'));
      } catch (err) {
        return next(err);
      }
    });
  }
};

const logInitialization = (path, method) => {
  // eslint-disable-next-line no-console
  console.log(`Initialized route [${method.toUpperCase()} ${path}]`);
};

module.exports = {
  route,
  publicGet,
  publicPost,
  publicPut,
  publicDelete,
  get,
  post,
  put,
  patch,
  deleteMethod,
  head,
  trace,
  options,
  logInitialization,
};
