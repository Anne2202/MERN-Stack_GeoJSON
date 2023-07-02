const express = require('express');
const { getProperties, getProperty, createProperty } = require('../BE_Controller/propertiesC');

const propertyRouter = express.Router();



propertyRouter.get("/", getProperties);
propertyRouter.get("/:id", getProperty);
propertyRouter.post("/", createProperty);





module.exports = propertyRouter;