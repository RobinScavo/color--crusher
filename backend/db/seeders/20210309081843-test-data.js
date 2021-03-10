'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'Players',
         [
           {
              name: 'Robin Scavo',
              hiScore: 455,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Angela Scavo',
              hiScore: 434,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Tom Scavo',
              hiScore: 405,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Sebastien Scavo',
              hiScore: 399,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Oakley Scavo',
              hiScore: 395,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Elaine Bodurtha',
              hiScore: 376,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Michelle Sever',
              hiScore: 358,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Jeremy Sever',
              hiScore: 344,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Dawsen Sever',
              hiScore: 305,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
           {
              name: 'Shelby Sever',
              hiScore: 301,
              hashedPassword: 'skipper',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Players', null, {});
  }
};
