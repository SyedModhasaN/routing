const modules = require("./multipleGetRequests_functons");
const fs = require('fs')
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/HTML/index.html")
    
    });
    app.get("/", function (req, res) {
        res.send(modules.home());
        });
        
        app.get("/about", (req, res) => {
        res.send(modules.about());
        });
        
        app.get("/contact", (req, res) => {
        res.send(modules.contact());
        });
        
        app.get("/express_tutorial", (req, res) => {
        res.send(modules.tutorial());
        });
        
    app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
        });