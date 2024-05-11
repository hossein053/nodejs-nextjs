import mongoose, { Document, Schema, Model } from 'mongoose';

export interface Post extends Document {
    title: string;
    price: number;
    description: string;
    image: Buffer;
    user_id: string
}

const postSchema = new Schema<Post>({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: Buffer, required: true },
    user_id: { type: String, required: true }
}, { versionKey: false });

export const PostModel: Model<Post> = mongoose.model('post', postSchema);

