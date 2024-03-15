const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService {
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFlight(data) {
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error : 'Arrival Time cannot be less than depature time'}
            }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId); 
            const flight = await this.flightRepository.createFlight({...data,
                totalSeats:airplane.capacity
            })
            return flight;
        }
        catch (error){
            console.log('Something went wrong at Service level');
            throw{error};
        }
    }
    async getAllFlightData(filter) {
        try{
            const flight=await this.flightRepository.getAllFlight(filter);
            return flight;
        }
        catch (error){
            console.log('Something went wrong at Service level');
            throw{error};
        }
    }

    async getFlight(flightId){
        try{
            const flight=await this.flightRepository.getFlight(flightId);
            return flight;
        }
        catch (error){
            console.log('Something went wrong at Service layer');
            throw{error};
        }
    }

    async updateFlight(flightId,data){
        try{
            const response=await this.flightRepository.updateFlight(flightId,data);
            return response;
        }
        catch (error){
            console.log('Something went wrong at Service layer');
            throw{error};
        }
    }

}

module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * arrivalAirport
 * departureAirport
 * arrivalTime
 * departureTime
 * price
 * boardingGate->allowNull
 * totalSeats->airplaneId
 */