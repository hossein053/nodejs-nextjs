import { Request, Response } from "express";
import { PostModel } from "../models";
import { validationResult } from "express-validator";


interface RequestUser extends Request { user?: any }

class PostControllers {

    async store(req: RequestUser, res: Response) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array().map(err => { return err.msg }) });
        }
        
        const { title, price, description } = req.body;
        const userId = (req.user as any)._id;

        try {
            const newItem = new PostModel({
                title,
                price,
                description,
                image: req.file?.path,
                user_id: userId
            });
            await newItem.save();
            res.status(200).send({ message: 'Data saved successfully.' });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'An error occurred while saving the data.' });
        }
    }
}
export default new PostControllers();