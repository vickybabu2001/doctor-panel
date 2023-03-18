const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
 
 const connectDB=async()=>{
    const URL=`mongodb+srv://vickybabu123:vicky123@merndoctorcluster.8vgzmfx.mongodb.net/Urlshortner?retryWrites=true&w=majority`
      try{
          await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
         console.log(`mongo db connected ${mongoose.connection.host}`);

      }catch(error){
          console.log(`MongoDb server issue ${error}`)
      }

  };
  module.exports=connectDB;
