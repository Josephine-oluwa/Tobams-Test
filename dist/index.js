"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("./utils/connectDB");
const mainApp_1 = require("./mainApp");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT);
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.log("server is on now");
    (0, connectDB_1.connectDB)();
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down due to uncaughtException: ", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down due to unHandledRejection: ", reason);
    server.close(() => {
        process.exit(1);
    });
});
