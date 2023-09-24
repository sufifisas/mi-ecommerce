const products = require("../controllers/product.controller.js");
var router = require("express").Router();
const productRoutes  = (app) => {
  
    // Retrieve all Products
    router.get("/", products.findAll);

    app.use('/api/products', router);
};

module.exports = productRoutes;