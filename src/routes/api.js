const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// POST /api/login
router.post("/login", (req, res) => {
  const email = String(req.body.email ?? "").trim();
  const password = String(req.body.password ?? "");

  const errors = [];
  if (!email) errors.push("Email is required.");
  if (!email.includes("@")) errors.push("Email must be valid.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length) {
    return res.status(400).json({ ok: false, errors });
  }

  // fake login for checkpoint (no DB yet)
  return res.json({ ok: true, user: { email } });
});

module.exports = { router };
