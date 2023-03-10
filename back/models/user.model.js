module.exports = (sequelize, Sequelize) => {
  // class 선언
  class User extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          userid: {
            type: Sequelize.STRING(60),
            primaryKey: true,
          },
          userpw: {
            type: Sequelize.STRING(64),
            allowNull: false,
          },
          username: {
            type: Sequelize.STRING(30),
            allownull: false,
          },
        },
        {
          sequelize,
        }
      );
    }
  }

  // class 사용
  User.initialize();
};
