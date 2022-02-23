import axios from 'axios'

const getAllCats = async () => {
	const config = {
		headers: {
			'X-Api-Key': '7ba2ab71-e19e-4eef-a9b9-3f9daa7ec778',
		},
	}

	await axios
		.get('https://api.thecatapi.com/v1/breeds', config)
		.then((res) => {
			console.log(res.data)
			return res.data
		})
}

export { getAllCats }
