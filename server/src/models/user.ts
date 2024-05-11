import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  rol: 'admin' | 'user'
}

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  rol: { type: String, default: 'user' }
}, { versionKey: false });

export const User = mongoose.model<IUser>('User', userSchema);

