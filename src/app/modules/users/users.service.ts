import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { genarateUserId } from './users.utils'

const createUsers = async (user: IUser) => {
  // default id genarate
  const id = await genarateUserId()
  user.id = id

  // password
  if (!user.password) {
    user.password = config.user_default_password as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Field to create User from user.servcie.ts')
  }
  return createdUser
}

export default {
  createUsers,
}
