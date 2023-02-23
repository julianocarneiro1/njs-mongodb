const Product = require('../models/Product')

module.exports = class ProductController {

    static showProducts(req, res) {
        res.render('products/all')
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static createProductPost(req, res) {
        const product = new Product(
            req.body.name,
            req.body.price,
            req.body.description
        )

        product.save()

        res.redirect('/products')
    }
}