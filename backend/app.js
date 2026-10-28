import express from "express";
import greetings from "./routes/api.js"

const app = express()

app.use("/api_v1", greetings)

app.listen(3000)