const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(router);

// app.use((req, res, next, error) => {
//   res.status(500).send(err.message);
// });

module.exports = app;
