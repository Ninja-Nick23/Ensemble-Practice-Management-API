const express = require("express");
const logger = require("./logger");
const errorHandler = require("./middleware/errorHandler");

const musiciansRouter = require("./routes/musicians");
const practiceSessionsRouter = require("./routes/practiceSessions");
const rehearsalsRouter = require("./routes/rehearsals");
const authRouter = require("./routes/auth");

const db = require("./database/models");   // ⭐ Load Sequelize models

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// ⭐ Sync database on server start (NO force, NO alter)
db.sequelize.sync()
  .then(() => console.log("Database synced on server start"))
  .catch(err => console.error("Database sync error:", err));

// Routes
app.use("/auth", authRouter);
app.use("/musicians", musiciansRouter);
app.use("/practice-sessions", practiceSessionsRouter);
app.use("/rehearsals", rehearsalsRouter);

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
