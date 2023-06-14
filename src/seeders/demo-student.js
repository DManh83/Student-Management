'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      name: 'Nguyễn Duy Mạnh',
      sex: 'Nam',
      email: 'example@gmail.com',
      phone: '13681783',
      address: 'Hà Nội',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Đức Mạnh',
      sex: 'Nam',
      email: 'example1@gmail.com',
      phone: '13781983',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Thị Diễm Quỳnh',
      sex: 'Nữ',
      email: 'example2@gmail.com',
      phone: '2642765886',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyễn Quang Vinh',
      sex: 'Nam',
      email: 'example3@gmail.com',
      phone: '307529051',
      address: 'Hải Phòng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Sơn Tùng',
      sex: 'Nam',
      email: 'example4@gmail.com',
      phone: '578434325',
      address: 'Thái Bình',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Đỗ Thu Trang',
      sex: 'Nữ',
      email: 'example5@gmail.com',
      phone: '97964465',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyễn Duy Đường',
      sex: 'Nam',
      email: 'example6@gmail.com',
      phone: '423525534',
      address: 'Bắc Giang',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hoàng Văn Đô',
      sex: 'Nam',
      email: 'example7@gmail.com',
      phone: '57468545',
      address: 'Hà Nội',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Đào Thị Hải Yến',
      sex: 'Nữ',
      email: 'example8@gmail.com',
      phone: '5436577654',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};