// console.log("hey this is nodejs server");
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// console.log("process => ", process); 
// const express = require("express");
const app = express();
app.get('/users', function (req, res) {
    res.json({
        data: "Katie Park www",
    });
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log(`Node server is running on port ${port}`);
});



// .env .gitignore