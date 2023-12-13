const express = require("express");
const fs = require("fs") 
const path = require("path")
const dirName = path.join(__dirname, 'timeStamps');

//initialize express server framework
const app = express();

app.get("/",(req, res)=>{
    res.send("Hey Nagul this is my first server");
})

app.get("/date-time",(req, res)=>{
    let date = new Date();
    let currentTimeStamp = date.toUTCString().slice(0, -3);
    let content = `The last updated timestamp: ${currentTimeStamp}`
    //let changedTime = currentTimeStamp.split(/[ ,:]+/).join("");
    let changedTime = currentTimeStamp.split(" ").join("").split(",").join("").split(":").join("");
    console.log(dirName)
    fs.writeFile(`${dirName}/${changedTime}.txt`, content, (err)=>{
        if(err){
            console.log(err)
            res.send('Error in writing the file')
            return
        }
        res.sendFile(path.join(dirName, "date-time.txt"));
    })
    
})
//listin to a server
app.listen(9000,()=> console.log(`server started in localhost:9000`));