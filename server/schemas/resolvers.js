const { User } = require("../models");

const resolvers = {
  Query: {
    username: async () => {
      return Username.find();
    },

    username: async (parent, { userNameId }) => {
      return Username.findOne({ _id: userNameId });
    },
  },

  Mutation: {
    addUsername: async (parent, { userName }) => {
      return Username.create({ userName });
    },
    addPassword: async (parent, { userNameId, password }) => {
      return Username.findOneAndDelete(
        { _id: userNameId },
        {
          $addToSet: { passwords: password },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addEmail: async (parent, { email }) => {
      return Email.create({ email });
    },
  },
};

module.exports = resolvers;
