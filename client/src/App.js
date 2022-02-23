import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

function App() {
	const [data, setData] = React.useState(null)

	React.useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setData(data.message))
	}, [])

	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/search/:keyword' element={<SearchScreen />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

export default App
