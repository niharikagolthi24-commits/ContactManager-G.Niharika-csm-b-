const mongoose = require("mongoose");
const dns = require("dns") 
dns.setServers(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://niharikagolthi:niharika0130@cluster0.6lqc45n.mongodb.net/?appName=Cluster0");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
