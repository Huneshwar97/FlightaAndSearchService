const {Flights} =require('../models/index');
const {Op} = require('sequelize');


class FlightRepository {


    #createFilter(data){
        let filter = {};
        if(data.arrivalAirport){
            filter.arrivalAirport=data.arrivalAirport;
        }
        if(data.departureAirport){
            filter.departureAirport=data.departureAirport;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{[Op.and]:[
        //         {price:{[Op.gte] :data.minPrice}},
        //         {price:{[Op.lte] :data.maxPrice}}
        //     ]});
        // }
        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte] :data.minPrice}});
            // Object.assign(filter,{price:{[Op.gte] :data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte] :data.maxPrice}});
            // Object.assign(filter,{price:{[Op.lte] :data.minPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }


    async createFlight(data) {
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error) {
            console.log('Something went wrong at Repository level');
            throw {error};
        }
    }

    async getFlight(flightId) {
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch (error) {
            console.log('Something went wrong at Repository level');
            throw {error};
        }
    }
    async getAllFlight(filter) {
        try{
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where:filterObject
            });
            return flight;
        }
        catch (error) {
            console.log('Something went wrong at Repository level');
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
          const flight = await Flights.update(data,{
            where:{
                id:flightId
            }
          });
          return flight;  
        } catch (error) {
            throw {error}
        }
    }

}

module.exports = FlightRepository;

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