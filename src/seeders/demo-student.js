'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      name: 'Nguyễn Duy Mạnh',
      gender: 'Nam',
      email: 'example@gmail.com',
      phone: '13681783',
      address: 'Hà Nội',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trịnh Thị Ngọc Quỳnh',
      gender: 'Nữ',
      email: 'example0@gmail.com',
      phone: '13781983',
      address: 'Thanh Hóa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Đức Mạnh',
      gender: 'Nam',
      email: 'example1@gmail.com',
      phone: '13781983',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Thị Diễm Quỳnh',
      gender: 'Nữ',
      email: 'example2@gmail.com',
      phone: '2642765886',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyễn Quang Vinh',
      gender: 'Nam',
      email: 'example3@gmail.com',
      phone: '307529051',
      address: 'Hải Phòng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Sơn Tùng',
      gender: 'Nam',
      email: 'example4@gmail.com',
      phone: '578434325',
      address: 'Thái Bình',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Đỗ Thu Trang',
      gender: 'Nữ',
      email: 'example5@gmail.com',
      phone: '97964465',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyễn Duy Đường',
      gender: 'Nam',
      email: 'example6@gmail.com',
      phone: '423525534',
      address: 'Bắc Giang',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hoàng Văn Đô',
      gender: 'Nam',
      email: 'example7@gmail.com',
      phone: '57468545',
      address: 'Hà Nội',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Đào Thị Hải Yến',
      gender: 'Nữ',
      email: 'example8@gmail.com',
      phone: '5436577654',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Phí Mạnh Hải',
      gender: 'Nam',
      email: 'example9@gmail.com',
      phone: '5436577654',
      address: 'Hải Phòng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tạ Ngọc Trung',
      gender: 'Nam',
      email: 'example9@gmail.com',
      phone: '5436577654',
      address: 'Bắc Ninh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyễn Phan Việt Dũng',
      gender: 'Nam',
      email: 'example10@gmail.com',
      phone: '5436577654',
      address: 'Bắc Giang',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trần Đức Hiếu',
      gender: 'Nam',
      email: 'example11@gmail.com',
      phone: '5436577654',
      address: 'Hà Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vũ Minh Hiếu',
      gender: 'Nam',
      email: 'example12@gmail.com',
      phone: '5436577654',
      address: 'Quảng Ninh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};