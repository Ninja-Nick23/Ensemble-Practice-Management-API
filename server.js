const express = require("express");
const logger = require("./logger");
const errorHandler = require("./middleware/errorHandler");

const musiciansRouter = require("./routes/musicians");
const practiceSessionsRouter = require("./routes/practiceSessions");
const rehearsalsRouter = require("./routes/rehearsals");
const authRouter = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

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
