const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/EmployeeDB";
const url = "mongodb+srv://phucuong:230602@cluster0.jjqlep6.mongodb.net/Foods?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
