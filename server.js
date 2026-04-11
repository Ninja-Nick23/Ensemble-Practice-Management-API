const express = require("express");
const db = require("./database/models");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const musiciansRouter = require("./routes/musicians");
const practiceRouter = require("./routes/practiceSessions");
const rehearsalsRouter = require("./routes/rehearsals");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/musicians", musiciansRouter);
app.use("/practice-sessions", practiceRouter);
app.use("/rehearsals", rehearsalsRouter);

app.use(errorHandler);

const PORT = 3000;

db.sequelize.authenticate().then(() => {
  console.log("Database connected.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

module.exports = app;
