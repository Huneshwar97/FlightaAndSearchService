const express = require("express");

const {PORT} = require('./config/servrConfig')

const setupAndAtartServer = async () =>{

    //create the express object
    const app =express();

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        
    })
}

setupAndAtartServer();