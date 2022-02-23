import axios from 'axios'

const getAllCats = async (req, res) => {
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
}

const getDetails = async (req, res) => {
	const keyword = req.params.keyword
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
}

const getImages = async (req, res) => {
	const id = req.params.id
	console.log('AA')
	console.log(id)
	const config = {
		headers: {
			'X-Api-Key': '7ba2ab71-e19e-4eef-a9b9-3f9daa7ec778',
		},
	}

	const { data } = await axios.get(
		`https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=10`,
		config
	)
	console.log(data)
	res.json(data)
}

export { getAllCats, getDetails, getImages }
