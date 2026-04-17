const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default:""
    },
    mood: {
        type: String,
        enum: {
            values: [ "sad", "happy", "surprised" ],
            message: "Enum this is"
        }
    }
})

const songModel = mongoose.model("songs", songSchema)

module.exports = songModel