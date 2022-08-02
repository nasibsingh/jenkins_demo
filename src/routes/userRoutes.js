const { Container } = require('typedi');
const {
  routes, featureLevel, get, put,
} = require('./utils');
const { Right } = require('../auth');
const { UserService } = require('../services');
const { updateUserProfileSchema } = require('../models');

module.exports = () => {
  get(featureLevel.production,
    Right.user.FETCH_USER_PROFILE,
    routes.user.PROFILE,
    async (req) => {
      const service = Container.get(UserService);
      return await service.fetchUserProfile({ ...req.currentUser });
    });

  put(featureLevel.production,
    Right.user.MODIFY_USER_PROFILE,
    routes.user.PROFILE,
    async (req) => {
      const service = Container.get(UserService);
      const updateDto = await updateUserProfileSchema.validateAsync(req.body);
      return await service.modifyUserProfile(updateDto, { ...req.currentUser });
    });
};
