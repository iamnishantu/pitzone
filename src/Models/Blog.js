const { model, Schema } = require('mongoose');

const blogSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  blogImg: {
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

module.exports = model('blog', blogSchema)
