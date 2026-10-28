import express from "express";
import { getRandomGreeting } from "../controllers/greetingController.js"

const Router = express.Router();

Router.get("/greeting", getRandomGreeting)

export default Router;