
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUser, User } from '../models';
import { validationResult } from 'express-validator';

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
                            message: 'Welcome',
                            user: {
                                username: user.username,
                                email: user.email,
                                created_at: user.createdAt
                            },
                            token: token
                        });
                    });
                } else {
                    response.status(404).send({ message: 'The password is wrong' });
                }
            } else {
                response.status(404).send({ message: 'The username or password is incorrect' });
            }

        } catch (error) {
            response.status(500).send({ message: "There is a problem" });
        }
    }

    async register(req: Request, res: Response) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array().map(err => { return err.msg }) });
        }

        try {
            const { username, email, password } = req.body;

            const existing_email: IUser | null = await User.findOne({ email });
            const existing_username: IUser | null = await User.findOne({ username });

            if (existing_email || existing_username) {
                res.status(400).json({ message: 'User already exists' });
                return;
            }

            const hashedPassword: string = await bcrypt.hash(password, 10);

            const newUser: IUser = new User({ username, email, password: hashedPassword, rol: 'user' });

            await newUser.save();

            res.status(201).json({ message: 'Registration completed. Please log in to your account' });
        } catch (err) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new AuthController();
