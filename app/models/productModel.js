var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    productName: {type:String} ,
    categore: {type:String} ,
    fileName: {type:String} ,
    price: { type: Number, min: 10, max: 100000000 },
    details: {type:String} ,
    rating: { type: Number, min: 1, max: 5 },
    availability: {type:String} 
});

mongoose.model('productModel', productSchema);