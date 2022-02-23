import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Form,
	Button,
	FormControl,
	InputGroup,
	Dropdown,
} from 'react-bootstrap'
import Loader from './Loader'
import axios from 'axios'

const Searchbox = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [cats, setCats] = useState([])
	const [keyword, setKeyword] = useState('')
	const [search, setSearch] = useState(false)

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

	const performSearch = (keyword) => {
		setKeyword(keyword)
		if (keyword === '') {
			getCats()
			setSearch(false)
		} else {
			const newCats = cats.filter((cat) => {
				return cat.name.toLowerCase().includes(keyword.toLowerCase())
			})
			setCats(newCats)
			setSearch(true)
		}
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
								performSearch(e.target.value)
							}></FormControl>
						{search &&
							cats.map((c) => (
								<Dropdown.Item href={`/search/${c.name}`}>
									{c.name}
								</Dropdown.Item>
							))}
					</InputGroup>
				</Form>
			)}
		</>
	)
}

export default Searchbox
