const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Log = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'UserModels'},
    taskid: { type: Schema.Types.ObjectId, ref: 'Task'},
    date: { type: Date.now },
    logDescription: { type: String }
})


module.exports = mongoose.model('Log', Log )