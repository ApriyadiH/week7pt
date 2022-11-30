const express = require('express');
const router = express.Router();

// Test Routes
router.get("/testposts", async (req, res) => {
    res.json({
      message: "Router posts",
    });
});



module.exports = router;