const express = require('express');
const router = express.Router();

// Test Routes
router.get("/testlikes", async (req, res) => {
    res.json({
      message: "Router Likes",
    });
});

module.exports = router;