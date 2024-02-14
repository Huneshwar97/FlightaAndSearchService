const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try{
            const flight = Airplane.findByPk(id);
            return flight;
        }
        catch(error){
            console.log("something went wrong int the repository");
            throw{error};
        }
    }
}

module.exports = AirplaneRepository;