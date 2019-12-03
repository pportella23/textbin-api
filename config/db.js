const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://admin:admin@cluster0-jtndx.mongodb.net/api?retryWrites=true&w=majority';

//const serverOptions = {
//  reconnectTries: Number.MAX_VALUE,
//  poolSize: 10
//};

//mongoose.connect(dbURI, options, {useUnifiedTopology: true}).then(
//  () => {
//    console.log("Database connection established!");
//  },
//  err => {
//    console.log("Error connecting Database instance due to: ", err);
//  }
//);

const mongo = mongoose.connect(dbURI, {useNewUrlParser: true});

mongo.then(() => {
	console.log('connected');
}).catch((err) => {
	console.log('err',err);
});

// require any models

require("../models/Message");
