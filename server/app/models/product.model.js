module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      brand: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      barcode: {
        type: DataTypes.BIGINT(12),
      }
    });
  
    return Product;
  };