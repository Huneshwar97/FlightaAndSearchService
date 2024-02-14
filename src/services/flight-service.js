const {FlightRepository,AirplaneRepository} = require('../repository/index');


class FlightService {
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFlight(data) {
        try{
            const airplane= this.airplaneRepository.getAirplane(data.airplaneId); 
            return flight;
        }
        catch (error){
            console.log('Something went wrong at Repository level');
            throw{error};
        }
    }
}

module.exports = FlightService;