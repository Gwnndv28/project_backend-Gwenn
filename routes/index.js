const express = require("express");
const router = express.Router();

// Controller imports here (once you define controllers)

router.get("/", (req, res) => {
  res.render("index", { title: "Express MVC" });
});

module.exports = router;
