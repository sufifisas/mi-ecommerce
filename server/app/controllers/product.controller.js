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

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(() => {
        res.send({
          message: "Product was updated successfully."
        });
    })
    .catch(err => {
      res.status(500).send({
        message: err.errors[0].message
      });
    });
};