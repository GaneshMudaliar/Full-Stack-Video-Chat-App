import express from "express";
import { dbConnect } from "./config/database.js";
import { createServer} from "node:http";
// import {Server} from "socket.io";
import dotenv from "dotenv";
import connectToSocket from "./config/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
dbConnect();

const PORT = process.env.PORT;
app.set("port" ,PORT );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//  socket server with expresss
const server = createServer(app);
const io = connectToSocket(server);



app.use("/api" , userRoutes);


const start = async () => {
  server.listen(app.get(PORT) , () => {
    console.log("Server listen in port : " , PORT);
  })
}

start();
