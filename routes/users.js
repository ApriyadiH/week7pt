const express = require('express');
const router = express.Router();

// Test Routes
router.get("/testusers", async (req, res) => {
    res.json({
      message: "Router Users",
    });
});






module.exports = router;