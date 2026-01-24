const express = require("express");
const router = express.Router();

const { getConnectionStatus } = require("../api/db");

// GET /api/db
router.get("/db", (req, res) => {
  res.json(getConnectionStatus());
});

// GET /api/health
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString()
  });
});

// GET /api/info
router.get("/info", (req, res) => {
  res.json({
    app: "CSP451 Web Starter",
    version: "1.0.0",
    message: "API endpoints working"
  });
});

// GET /api/users (mock data for now)
router.get("/users", (req, res) => {
  res.json([
    { id: 1, username: "demo", role: "student" },
    { id: 2, username: "tester", role: "student" }
  ]);
});

module.exports = router;
