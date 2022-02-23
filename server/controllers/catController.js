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

export { getAllCats }
