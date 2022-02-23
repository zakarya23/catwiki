import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const getAllCats = async (req, res) => {
	try {
		console.log(process.env.API_KEY)
		const config = {
			headers: {
				'X-Api-Key': process.env.API_KEY,
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
				'X-Api-Key': process.env.API_KEY,
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
				'X-Api-Key': process.env.API_KEY,
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
