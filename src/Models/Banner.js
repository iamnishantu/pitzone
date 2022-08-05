const { model, Schema } = require("mongoose");

const bannerSchema = new Schema({


    banner: {

        filename: {
            type: String,
            default: null
        },
        filesize: {
            type: String,
            default: null
        },
        filetype: {
            type: String,
            default: null
        },
        url: {
            type: String,
            required: null
        },

    }

},
    {
        timestamps: true
    })

module.exports = model('banner', bannerSchema)