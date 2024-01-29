const express = require("express");
const socket = require("socket.io");

const app = express();

//display frontend
app.use(express.static("public"));

let server = app.listen(3000, ()=>{
    console.log("listening to port " + 3000)
})

const io = socket(server);

io.on("connection" , (socket)=>{
    console.log("made socket connection");

    socket.on("beginpath", (data)=>{
        io.sockets.emit("beginpath", data);
    })

    socket.on("drawstroke", (data) => {
        io.sockets.emit("drawstroke", data);
    })

    socket.on("redoundo", (data) => {
        io.sockets.emit("redoundo", data);
    })
})