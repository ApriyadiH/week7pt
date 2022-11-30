const express = require('express');
const router = express.Router();

// Test Routes
router.get("/testcomments", async (req, res) => {
    res.json({
      message: "Router comments",
    });
});

module.exports = router;