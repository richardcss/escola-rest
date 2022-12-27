module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.renameColumn('fotos', 'originalName', 'originalname'),
      queryInterface.renameColumn('fotos', 'fileName', 'filename'),
    ])
  },

  async down(queryInterface, Sequelize) {},
};
