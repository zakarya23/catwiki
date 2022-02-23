import React, { useState, useEffect } from 'react'
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'
import Loader from './Loader'
import axios from 'axios'

const Searchbox = () => {
	const [loading, setLoading] = useState(true)
	const [cats, setCats] = useState([])

	useEffect(() => {
		getCats()
	}, [])

	const getCats = async () => {
		await axios.get('/api/cats').then((res) => {
			setCats(res.data)
			setLoading(false)
		})
	}

	const submitHandler = () => {}

	const search = () => {}
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Form className='d-flex' onSubmit={submitHandler}>
					<Button>
						<i class='fas fa-search'></i>
					</Button>
					<InputGroup>
						<FormControl
							type='search'
							placeholder='Enter your breed'
							className='me-2'
							onChange={(e) =>
								search(e.target.value)
							}></FormControl>
					</InputGroup>
				</Form>
			)}
		</>
	)
}

export default Searchbox
