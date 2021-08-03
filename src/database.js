const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/blockchain',{useNewUrlParser:true});
const db = mongoose.connection;
console.log(`MongoDB Connected`);
module.exports = {mongoose}
