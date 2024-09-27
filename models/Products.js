import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const ProductSchema = new mongoose.Schema({
    Id:{
        type: Number,
        unique: true,
        required: true
    },

    Name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: [true, "The name of Product must be unique"]
    },

    ProductNumber: {
        type: Number,
        unique: [true, "The number of cells must be unique"]
    },
    State: {
        type: String,
        required: true,
        enum: ['Available', 'Empty', 'expired']
    },
    Price: {
        type: Number,
        required:[true, ' The Price is requires'],
        minlength: 0

    }
});

ProductSchema.plugin(AutoIncrement, { inc_field: 'ProductNumber' });

const Product = mongoose.model('Product', ProductSchema, 'Products');

export default Product;