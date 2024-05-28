import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUsers(user)
    res.status(200).json({
      Success: true,
      message: 'User creatd successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      Success: false,
      message: `Faild To create User from controller ${error}`,
    })
  }
}

export default {
  createUser,
}
