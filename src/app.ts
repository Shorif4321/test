import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'
const app: Application = express()

//midleware and setup
app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Application running Perfectly')
})

export default app
