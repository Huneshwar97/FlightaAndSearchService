const express = require('express');

const {FlightMiddlewares} = require('../../middlewares/index')

const CityController =require('../../controllers/city-controller');
const FlightContoller =require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destory);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/flights',FlightMiddlewares.validateCreateFlight,FlightContoller.create);
router.get('/flights',FlightContoller.getAll);
router.get('/flights/:id',FlightContoller.get);
router.patch('/flights/:id',FlightContoller.update)

router.post('/airports',AirportController.create);
module.exports = router;