const config = {
  db: {
    development: {
      host: "127.0.0.1",
      port: "3306",
      username: "",
      password: "",
      database: "",
      dialect: "mysql",
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  },
};

module.exports = config;
