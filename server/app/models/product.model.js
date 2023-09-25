module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      barcode: {
        type: DataTypes.BIGINT(12),
        unique: true,
        allowNull: false,
      }
    });
  
    return Product;
  };