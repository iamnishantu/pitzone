const { product } = require('../Models');

exports.addProduct = async (payload) => {
	console.log(payload)
	try {
		const result = await new product(payload)
		console.log("result", result)
		result.save()
		if (result) {
			return {
				status: 200,
				success: true,
				data: result,
				message: "Add product Successfully"
			}

		} else {
			return {
				status: 400,
				success: false,
				message: "Something Went Wrong"
			}
		}

	} catch (error) {
		res.status(500).json({
			message: error.message
		})
	}
}
exports.getProduct = async () => {
	try {
		const result = await product.find({})
			.populate("category_id")
			.populate("brand")
		if (result) {
			return {
				success: true,
				status: 200,
				data: result,
				message: "Successfully get"
			}
		} else {
			return {
				success: false,
				status: 400,
				message: "Something Went Wrong"
			}
		}

	} catch (error) {
		console.log(error)
		throw error
	}
}


exports.updateProduct = async (productId, payload) => {
	try {
		let result = await product.findOneAndUpdate({ _id: productId }, payload)
		if (result) {
			return {
				success: true,
				data: result,
				code: 200,
				message: 'Successfully updated'
			}
		} else {
			return {
				success: false,
				code: 404,
				error: 'Record Not Found!!!'
			}
		}

	} catch (error) {
		console.log(error)
		throw error
	}
}

exports.deleteProduct = async (productId) => {
	let result = await product.findOneAndDelete({ _id: productId })
	if (result) {
		return {
			success: true,
			data: result,
			status: 200,
			message: 'Successfully Deleted'

		}
	} else {
		return {
			success: false,
			status: 404,
			error: 'Record Not Found!!!'
		}
	}
}

exports.getProductByCategoryId = async (categoryId) => {
	try {
		const result = await product.find({ category_id: categoryId })
		if (result) {
			return {
				message: "Get Product successfully",
				success: true,
				status: 200,
				data: result
			}
		} else {
			return {
				message: "Something Went Wrong",
				status: 400,
				success: true
			}
		}

	} catch (error) {
		console.log(error)
		message: error.message
	}
}

exports.getProductByBrandId = async (brandId) => {
	try {
		const result = await product.find({ brand: brandId })
		if (result) {
			return {
				message: "Get Product successfully",
				success: true,
				status: 200,
				data: result
			}
		} else {
			return {
				message: "Something Went Wrong",
				status: 400,
				success: true
			}
		}

	} catch (error) {
		console.log(error)
		message: error.message
	}
}