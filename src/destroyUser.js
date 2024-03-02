// src/deleteUser.js

const { User } = require('./models');

const remove  = async () => {
  const user = await User.destroy(
    { where: { id: 1 } },
  );
  return user;
}

module.exports = { remove }