const express = require("express");
const passport = require("passport");
const cookieparser =require("cookie-parser");
const session = require("express-session");
const cors =require("cors");
const env = require("dotenv");
env.config();
const redisClient = require('./config/redis')
const redisStore = require('connect-redis')(session);
const app = express();
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    secure: true,
    httpOnly: true,
    cookie:{
        maxAge: 1000*60*60*24*7,
        httpOnly:true,
        sameSite:"none",
        secure: true
    },
    // store
})