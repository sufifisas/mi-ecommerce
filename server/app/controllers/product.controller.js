const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    const keyword = req.query.keyword;
    var condition = keyword ? {[Op.or]: [
            { name: { [Op.like]: `%${keyword}%` }},
            { brand: { [Op.like]: `%${keyword}%` }}
        ]}
        : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};