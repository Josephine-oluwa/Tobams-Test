"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mainError_1 = require("./Error/mainError");
const imageRouter_1 = __importDefault(require("./router/imageRouter"));
const errorHandler_1 = require("./Error/errorHandler");
const mainApp = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "*",
        methods: ["GET", "POST"],
    }));
    app.get("/", (req, res) => {
        res.status(mainError_1.HTTP.OK).json({
            message: "Awesome code"
        });
    });
    app.use("/api", imageRouter_1.default);
    app.all("*", (req, res, next) => {
        next(new mainError_1.mainError({
            name: "Router Error",
            message: `This Error is coming up because the ${req.originalUrl} URL, isn't correct!!!`,
            status: mainError_1.HTTP.BAD_REQUEST,
            success: false
        }));
    });
    app.use(errorHandler_1.errorHandler);
};
exports.mainApp = mainApp;
