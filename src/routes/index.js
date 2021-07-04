const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

router.use("/auth", require("./auth"));
router.use("/posts", authenticate, require("./posts"));

module.exports = router;