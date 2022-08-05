const { services } = require('../Models')

exports.addService = async (payload) => {
	try {
		const result = await new services(payload)
		result.save()
		if (result) {
			return {
				success: true,
				status: 200,
				data: result,
				message: "Add Service Seccessfully"
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

exports.getService = async () => {
	try {
		const result = await services.find({})
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

exports.getServiceByServiceTypeId = async (serviceTypeId) => {
	try {
		const result = await services.find({ serviceTypeId: serviceTypeId })
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

exports.updateServices = async (ServiceId, payload) => {
	try {
		let result = await services.findOneAndUpdate({ _id: ServiceId }, payload)
		if (result) {
			return {
				success: true,
				data: result,
				status: 200,
				message: 'Successfully updated'
			}
		} else {
			return {
				success: false,
				status: 404,
				error: 'Record Not Found!!!'
			}
		}

	} catch (error) {
		console.log(error)
		throw error
	}
}

exports.deleteService = async (ServiceId) => {
	let result = await services.findOneAndDelete({ _id: ServiceId })
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