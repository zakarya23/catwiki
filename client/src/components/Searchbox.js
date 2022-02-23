import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'
import Loader from './Loader'
import axios from 'axios'

const Searchbox = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [cats, setCats] = useState([])
	const [keyword, setKeyword] = useState('')

	useEffect(() => {
		getCats()
	}, [])

	const getCats = async () => {
		await axios.get('/api/cats').then((res) => {
			setCats(res.data)
			setLoading(false)
		})
	}

	const submitHandler = (e) => {
		e.preventDefault()
		console.log(keyword)
		if (keyword.trim()) {
			navigate(`/search/${keyword}`)
		} else {
			navigate('/')
		}
	}

	const search = (keyword) => {
		setKeyword(keyword)
	}

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
