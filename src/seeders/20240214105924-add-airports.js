'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempagoda international Airport',
        cityId:4,
        address:'bagal me hai',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mysore Airport',
        cityId:4,
        address:'bagal me hai',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Bhubaneswar Airport',
        cityId:2,
        createdAt:new Date(),
        address:'bagal me hai',
        updatedAt:new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
