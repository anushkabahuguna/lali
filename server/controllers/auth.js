// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

const register = async (req, res) => {
    res.send("Register");
}

const login = async (req, res) => {
    res.send("Login");
};

module.exports = { login, register };