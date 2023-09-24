const db = require("../models");
const productFaker = require('./product.faker');
const Product = db.products;

Product.bulkCreate(productFaker(20)).then(() => console.log("Products data have been seeded"));