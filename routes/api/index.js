const express = require('express');
const router = express.Router();

const ticketsRoutes = require('./tickets');

router.use("/tickets", ticketsRoutes);


module.exports = router;
