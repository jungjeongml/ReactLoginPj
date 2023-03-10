const app = require("./app");
const { sequelize } = require("./models");
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await sequelize.sync({ force: true });
  console.log("Back Open");
});
