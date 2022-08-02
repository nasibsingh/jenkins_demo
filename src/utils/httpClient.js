const fetch = require('node-fetch');

const HttpStatus = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
};

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const apiCall = (url, method = HttpMethods.GET, body, headers) => {
  let apiBody;
  if (body) {
    apiBody = JSON.stringify(body);
  }
  return new Promise((resolve, reject) => {
    fetch(url, { body: apiBody, headers, method })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  apiCall, HttpMethods, HttpStatus,
};
