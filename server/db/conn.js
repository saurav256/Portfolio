const mongoose = require("mongoose");

const DB = "mongodb+srv://saurav259singh:mnl8uisBjEbRAY9x@cluster0.b8hepuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>{
    console.log(err)
})