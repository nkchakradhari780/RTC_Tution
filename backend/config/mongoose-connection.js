const mongoose = require('mongoose')
const config = require("config");
const dbURI = config.get('MONGODB_URI')

mongoose
    .connect(`mongodb://127.0.0.1:27017/rtc`)
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log("Not Connected")
        console.log(err.message);
    })

module.exports = mongoose.connection;