const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    }
})
module.exports = mongoose.model('Tool', toolSchema)
