const Router = require('express')
const router = new Router();
const ratesController = require('./../Controllers/RatesController');

router.get("/rates", ratesController.getPrice);

module.exports = router;