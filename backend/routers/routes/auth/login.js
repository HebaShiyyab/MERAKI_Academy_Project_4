const express = require("express");
const loginRouter = express.Router();
// require the controller
const login = require("../../controllers/auth/login");

// http://localhost:5000/login
loginRouter.post("/login", login);

module.exports = loginRouter;



// ================ This code in Server ===============
const loginRouter = require('./routers/routes/auth/login')
app.use(loginRouter)
// ===============================================