const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalAirport ||
        !req.body.departureAirport ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        //if any of the body params is missing we come insode
        return res.status(400).json({
            data:{},
            success:false,
            message:'invalid request body to create flight',
            err:'Missing mabdatory properties to create a fight'
        })
    }
    next();
}

module.exports = {
    validateCreateFlight 
}