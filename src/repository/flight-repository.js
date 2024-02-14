const {Flights} =require('../models/index');

class FlightRepository {

    async createFlight(data) {
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error) {
            console.log('Something went wrong at Repository level');
            throw{error}
        }
    }


}

module.exports = FlightRepository;