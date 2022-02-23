import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'
import Loader from '../components/Loader'

const SearchScreen = () => {
	const [data, setData] = useState('')
	const [loading, setLoading] = useState(true)
	const [images, setImages] = useState('')
	const { keyword } = useParams()

	useEffect(() => {
		getDetails()
	}, [])

	const getDetails = async () => {
		const { data } = await axios.get(`/api/cats/${keyword}`)
		setData(data)
		getImages(data.id)
	}

	const getImages = async (id) => {
		const { data } = await axios.get(`/api/cats/images/${id}`)
		setImages(data)
		setLoading(false)
	}

	const {
		name,
		description,
		temperament,
		origin,
		life_span,
		adaptability,
		affection_level,
		child_friendly,
		grooming,
		intelligence,
		health_issues,
		social_needs,
		stranger_friendly,
	} = data

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Container>
					<Row>
						<Col>
							<Image
								style={{ width: '50rem' }}
								src={images[0].url}
							/>
						</Col>
						<Col>
							<Container>
								<Row>
									<h1>{name} </h1>
								</Row>
								<Row>{description}</Row>

								<Row>
									<b>Temperament</b> {temperament}
								</Row>
								<Row>
									<b>Origin</b> {origin}
								</Row>
								<Row>
									<b>Life Span</b> {life_span}
								</Row>
								<Row>
									<b>Adaptability</b> {adaptability}
								</Row>
								<Row>
									<b>Affection Level</b> {affection_level}
								</Row>
								<Row>
									<b>Child Friendly</b> {child_friendly}
								</Row>
								<Row>
									<b>Grooming</b> {grooming}
								</Row>
								<Row>
									<b>Intelligence</b> {intelligence}
								</Row>
								<Row>
									<b>Health Issues</b> {health_issues}
								</Row>
								<Row>
									<b>Social Needs</b> {social_needs}
								</Row>
								<Row>
									<b>Stranger Friendly</b> {stranger_friendly}
								</Row>
							</Container>
						</Col>
					</Row>
					<h1>More Images</h1>
					<Row md={4}>
						{images.slice(1).map((image) => (
							<Col>
								<Image
									style={{
										width: '20rem',
										height: '20rem',
										padding: '2rem',
									}}
									src={image.url}
								/>
							</Col>
						))}
					</Row>
				</Container>
			)}
		</>
	)
}

export default SearchScreen
