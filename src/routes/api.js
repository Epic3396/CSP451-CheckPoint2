const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// POST /api/login
router.post("/login", (req, res) => {
  const username = String(req.body.username ?? "").trim();
  const password = String(req.body.password ?? "");

  const errors = [];
  if (!username) errors.push("Username is required.");
  if (password.length < 8) errors.push("Password must be at least 8 characters.");

  if (errors.length) {
    return res.status(400).json({ ok: false, errors });
  }

  // fake login for checkpoint (no DB yet)
  return res.json({ ok: true, user: { username } });
});

module.exports = { router };
