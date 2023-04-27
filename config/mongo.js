'use strict'
const mongoose = require ('mongoose');

exports.connect = async()=>{
    try {
        const uriMongo = `${process.env.URI_MONGO}`;
        mongoose.set('strictQuery',false)
        await mongoose.connect(uriMongo);
        console.log('bruh')
    } catch (err){
        console.error(err)
        
    }
}