import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 3001
import catRouter from './routers/catRouter.js'

dotenv.config()
const app = express()
app.use(express.json())
const __dirname = path.resolve()

app.use('/api/cats', catRouter)
// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('Hello World!')
	})
}

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
