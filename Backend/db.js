const mongoose =require('mongoose');
const url="mongodb+srv://amangupta4529:amangupta4529@cluster0.bcf4z.mongodb.net/iNotebook?retryWrites=true&w=majority"

 const connectToMongo=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
       
        useUnifiedTopology:true
        
    }).then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>console.log(err));
}
module.exports=connectToMongo;

