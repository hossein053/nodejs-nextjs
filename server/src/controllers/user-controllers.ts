import { Request, Response } from "express";
import paginate from "../helpers/paginate";
import User from "../models/user";

class UserControllers {

    async index(request: Request, response: Response) {
        try {
            response.send(await paginate(User, { request }))
        } catch (error) {
            response.status(500).json({ error: 'خطای سرور داخلی' });
        }
    }

    async find(request: Request, response: Response) {
        try {
            const { id } = request.params;
            if (id) {
                const user = await User.findById(id)
                response.send(user);
            }
        } catch (error) {
            response.status(500).json({ error: 'خطای سرور داخلی' });
        }
    }

    async store(request: Request, response: Response) {
        const { name, age } = request.body;
        if (!name || !age) {
            return response.status(400).json({ error: 'لطفا اطلاعات خود را وارد کنید' });
        }

        try {
            const newUser = new User({ name, age });
            await newUser.save();
            response.status(201).json({ message: 'عملیات با موفقیت انجام شد', user: newUser });
        } catch (error) {
            response.status(500).json({ error: 'خطای سرور داخلی' });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            if (id) {
                const user = await User.findByIdAndDelete(id)
                if (user) {
                    console.log('Deleted user:', user);
                } else {
                    console.log('User not found.');
                }
            }
        } catch (error) {
            response.status(500).json({ error: 'خطای سرور داخلی' });
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, age } = request.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { name, age },
                { new: true }
            );

            if (!updatedUser) {
                return response.status(404).json({ error: 'User not found' });
            }

            response.json(updatedUser);
        } catch (error) {
            response.status(500).json({ error: 'Internal server error' });
        }
    }
    
}
export default new UserControllers();