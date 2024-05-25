import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
const app: Application = express()

//midleware
app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: any) => {
  res.send('Application running Perfectly')
})

export default app
