import Product from '../models/Products.js';

export const createProduct = async (req, res) => {
    const body = req.body;
    try {
        const product = new Product(body);
        await product.save();
        res.status(201).send('Product saved successfully');
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getProductByNumber = async (req, res) => {
    try {
        const product = await Product.findOne({ ProductNumber: req.params.ProductNumber });
        if (!product) return res.status(404).send('Product not found');
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateProduct = async (req, res) => {
    const { Id, Name, ProductNumber, State, Price } = req.body;
    try {
        const product = await Product.findOneAndUpdate({ Id: Id }, { Name, ProductNumber, State, Price }, { new: true });
        if (!product) return res.status(404).send('Product not found');
        res.status(200).send('Product updated successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteProductByNumber = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ ProductNumber: req.params.ProductNumber });
        if (!product) return res.status(404).send('Product not found');
        res.send('Product deleted successfully');
    } catch (error) {
        res.status(500).send('Error to delete Product ');
    }
};
