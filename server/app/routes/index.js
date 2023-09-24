const productRoutes = require('./product.routes');

const routes = (app) => {
    productRoutes(app);
}   

module.exports = routes;