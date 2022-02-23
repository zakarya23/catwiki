import cat from '../images/cat2.jpg'
import { Card } from 'react-bootstrap'
import Searchbox from './Searchbox'

const Banner = () => {
	return (
		<Card className='bg-dark text-white'>
			<Card.Img
				variant='top'
				style={{ height: '38rem' }}
				src={cat}
				alt='cat'
			/>
			<Card.ImgOverlay>
				<h1
					style={{
						color: 'white',
						textAlign: 'center',
						paddingTop: '2rem',
					}}>
					CatWiki
				</h1>
				<Searchbox />
			</Card.ImgOverlay>
		</Card>
	)
}

export default Banner
