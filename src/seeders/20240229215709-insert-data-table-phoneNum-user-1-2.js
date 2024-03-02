'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('Users', 
      {phoneNum: '997998877'},
      {id: {[Sequelize.Op.in]: [1, 2]}}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('Users', 
    {phoneNum: null},
    {id: {[Sequelize.Op.in]: [1, 2]}}
  );
  }
};
