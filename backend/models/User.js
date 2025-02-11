const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema ({
    username: { type: String, required: true },
    email:  { type: String, required: true },
    password:  { type: String, required: true },
    tasks: [ { type: Schema.Types.ObjectId, ref: 'Task'} ],
    image: { type: String }
})


module.exports = mongoose.model('User', User)