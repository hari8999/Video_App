
import mongoose from 'mongoose';

const Connection = async (username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.urmvvij.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("You have successfully connected to MongoDB database");
    }
    catch(error){
        console.log("Error while connecting to MongoDB",error);
    }
}

export default Connection;