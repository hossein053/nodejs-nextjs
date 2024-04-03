
import { Request, Response } from 'express';
import User, { IUser } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthController {

    async login(request: Request, response: Response) {
        try {
            const { username, password } = request.body;

            const user: IUser | null = await User.findOne({ username });
            if (user) {
                const isMatch = bcrypt.compareSync(password, user.password);
                if (isMatch) {
                    jwt.sign({ user: user }, 'secretKey', (_: any, token: any) => {
                        response.status(200).send({
                            user: {
                                username: user.username,
                                email: user.email,
                                created_at: user.createdAt
                            },
                            token: token
                        });
                    });
                } else {
                    response.status(404).send({ message: ' کلمه عبور اشتباه است' });
                }
            } else {
                response.status(404).send({ message: 'نام کاربری یا کلمه عبور اشتباه است' });
            }

        } catch (error) {
            response.status(500).send({ message: "مشکلی پیش امده " });
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ error: 'لطفا اطلاعات خود را وارد کنید' });
            }
            const existing_email: IUser | null = await User.findOne({ email });
            const existing_username: IUser | null = await User.findOne({ username });

            if (existing_email || existing_username) {
                res.status(400).json({ error: 'کاربر از قبل وجود دارد' });
                return;
            }

            const hashedPassword: string = await bcrypt.hash(password, 10);

            const newUser: IUser = new User({ username, email, password: hashedPassword });

            await newUser.save();

            res.status(201).json({ message: 'کاربر با موفقیت ثبت نام کرد' });
        } catch (err) {

            res.status(500).json({ error: 'خطای سرور داخلی' });
        }
    }
}

export default new AuthController();
