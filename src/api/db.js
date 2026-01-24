function getConnectionStatus() {
  // placeholder for later database integration
  return {
    connected: false,
    driver: "none",
    note: "DB not configured yet (starter placeholder)"
  };
}

module.exports = { getConnectionStatus };
