const { model, Schema } = require('mongoose');

const servicesSchema = new Schema({


	serviceName: {
		type: String,
		required: true
	},
	serviceImg: {
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

	},
	serviceTypeId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "servicetype"

	}

},
	{
		timestamps: true
	})

module.exports = model("Services", servicesSchema)