const products = require("../controllers/product.controller.js");
var router = require("express").Router();
const productRoutes  = (app) => {
  
    // Retrieve all Products
    router.get("/", products.findAll);

    // Retrieve a single Product with id
    router.get("/:id", products.findOne);

    // Update a Product with id
    router.put("/:id", products.update);

    app.use('/api/products', router);
};

module.exports = productRoutes;