const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes')

const flightService = new FlightService();

const create = async (req,res) => {
    try{
         let flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            arrivalAirport:req.body.arrivalAirport,
            departureAirport:req.body.departureAirport,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
         }
        const flight = await flightService.createFlight(flightRequestData);
        console.log(res.body);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created a flight'
        })
    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'Not able to create a Flight'
        })
    }
}
    const getAll =async (req,res) => {
        try{
            const flight = await flightService.getAllFlightData(req.body);
            console.log(res.body);
            return res.status(SuccessCodes.OK).json({
                data:flight,
                success:true,
                err:{},
                message:'Successfully fetched all flight'
            })
        }
        catch (error){
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                err:error,
                message:'Not able to fetch a Flight'
            })
        }
    }

module.exports = {
    create,
    getAll
}