const express = require('express');
const { getUsers, createUser } = require('../BE_Controller/usersC');

const userRouter = express.Router();



userRouter.get("/", getUsers);
userRouter.post("/", createUser);




module.exports = userRouter;