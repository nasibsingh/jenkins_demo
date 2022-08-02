const { Container } = require('typedi');
const { routes, featureLevel, publicPost } = require('./utils');
const { SecurityService } = require('../services');
const {
  loginSchema, signupSchema, socialLoginSchema,
} = require('../models');

/**
  * Login/Signup end point
* */
module.exports = () => {
  publicPost(
    featureLevel.production,
    routes.security.SIGN_UP,
    async (req) => {
      const service = Container.get(SecurityService);
      const userSignup = await signupSchema.validateAsync(req.body);
      return await service.signUp(req.ip, userSignup);
    },
  );

  publicPost(
    featureLevel.production,
    routes.security.LOGIN,
    async (req) => {
      const service = Container.get(SecurityService);
      const { email, password } = await loginSchema.validateAsync(req.body);
      return await service.login(req.ip, email, password);
    },
  );
};
