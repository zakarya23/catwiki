import axios from 'axios'

const getAllCats = async (req, res) => {
	try {
		const config = {
			headers: {
				'X-Api-Key': '7ba2ab71-e19e-4eef-a9b9-3f9daa7ec778',
			},
		}

		const { data } = await axios.get(
			'https://api.thecatapi.com/v1/breeds',
			config
		)

		res.json(data)
	} catch (error) {
		console.error(error)
		res.status(404)
	}
}

const getDetails = async (req, res) => {
	const keyword = req.params.keyword

	try {
		const config = {
			headers: {
				'X-Api-Key': '7ba2ab71-e19e-4eef-a9b9-3f9daa7ec778',
			},
		}

		const { data } = await axios.get(
			`https://api.thecatapi.com/v1/breeds/search?q=${keyword}`,
			config
		)

		res.json(data[0])
	} catch (error) {
		console.error(error)
		res.status(404)
	}
}

const getImages = async (req, res) => {
	const id = req.params.id

	try {
		const config = {
			headers: {
				'X-Api-Key': '7ba2ab71-e19e-4eef-a9b9-3f9daa7ec778',
			},
		}

		const { data } = await axios.get(
			`https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=10`,
			config
		)
		res.json(data)
	} catch (error) {
		console.error(error)
		res.status(404)
	}
}

export { getAllCats, getDetails, getImages }
