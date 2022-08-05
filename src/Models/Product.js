const { model, Schema } = require('mongoose');

const productSchema = new Schema({

	productName: {
		type: String,
		required: true
	},
	manufactuer: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true
	},
	size_of_product: {
		type: String,
		required: true
	},
	size_of_packaing: {
		required: true,
		type: String
	},
	weight_of_packaged_item: {
		type: String,
		required: true
	},
	warrenty: {
		type: String,
		required: true

	},
	price: {
		type: String,
		required: true,
	},
	descrption: {
		required: true,
		type: String
	},
	category_id: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "category"
	},
	brand: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "brand"
	},
	productImg: [{
		filename: {
			type: String,
			required: true

		},
		filetype: {
			type: String,
			required: true
		},
		filesize: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		},
	}],

},
	{
		timestamps: true
	})
module.exports = model("product", productSchema)