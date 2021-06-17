const express = require("express");
const { tableData } = require("./Models/xlsx-data");
const app = express();

const lib = require("./Models/xlsx-data.js");


app.get("/pivotTable", function(req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200);
    res.send(lib.tableData())
    res.end()
})

app.listen(5000, function(){
    console.log("express server running on port 5000")
})