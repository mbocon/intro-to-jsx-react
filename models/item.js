// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    qty: {
        type: Number,
    },
    price: {
        type: Schema.Types.Decimal128,
    }
}, {
    timestamps: true
});

// export model
module.exports = mongoose.model('Item', itemSchema);