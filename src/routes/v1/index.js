const express = require('express');
const CityController =require('../../controllers/city-controller');
const FlightContoller =require('../../controllers/flight-controller');
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destory);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/flight',FlightContoller.create);
router.get('/flight',FlightContoller.getAll);
module.exports = router;