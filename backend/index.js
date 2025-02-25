import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js"
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();
dotenv.config();
dbConnect();
const server = createServer(app);
const io = connectToSocket(server);

const PORT = process.env.PORT
app.set("port", (PORT));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use("/api/users" , userRoutes)


server.listen(app.get("port"), () => {
  console.log("LISTENIN ON Port : " , PORT)
});