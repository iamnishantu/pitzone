const express = require('express');
const route = express.Router();

route.use('/user',require('./UserRoutes'));
route.use('/admin',require('./AdminRoutes'));
route.use('/banner',require('./BannerRoutes'));
route.use('/category',require('./CategoryRoutes'));
route.use('/brand',require('./BrandRoutes'));
route.use('/blog',require('./BlogRoutes'));
route.use('/product',require('./ProductRoutes'));
route.use('/service-type',require('./ServiceTypeRoutes'));
route.use('/service',require('./ServicesRoutes'));
route.use('/perodic-service',require('./PeriodicServiceRoutes'));
route.use('/seller',require('./SellerRoutes'));
route.use('/cart',require('./CartRoutes'));
 
module.exports = route
