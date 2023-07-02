const Property = require("../BE_Models/property");

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("owner");
    res.json(properties);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProperty = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const property = await Property.findById(id).populate("owner");
    res.json(property);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProperty = async (req, res) => {
  try {
    const {
      body: {
        title,
        description,
        price,
        bedrooms,
        area,
        image,
        images,
        owner,
        availability,
        createdAt,
      },
    } = req;
    console.log(req.body);
    const user = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
      createdAt,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProperties, getProperty, createProperty };
