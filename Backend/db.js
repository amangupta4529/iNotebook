const mongoose =require('mongoose');
const url="mongodb+srv://amangupta:amangupta@cluster0.wcblj.mongodb.net/?retryWrites=true&w=majority"

 const connectToMongo=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>console.log(err));
}
module.exports=connectToMongo;

