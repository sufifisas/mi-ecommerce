module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Brand',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Product Name',
      },
      barcode: {
        type: DataTypes.BIGINT(12),
        unique: true,
        allowNull: false,
        field: 'UPC12 Number',
      }
    });
  
    return Product;
  };