import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const usersSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: String,
  },
  { timestamps: true },
)

export const User = model<IUser, UserModel>('User', usersSchema)
