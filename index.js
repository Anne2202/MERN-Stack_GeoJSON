const express = require("express");
require("dotenv/config");
require("./db");
const cors = require("cors");

const userRouter = require("./BE_Routes/usersR");
const propertyRouter = require("./BE_Routes/propertiesR");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/properties", propertyRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
