const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subcategory = new Schema ({
    name: { type: String }
})


module.exports = mongoose.model('Subcategory', Subcategory )