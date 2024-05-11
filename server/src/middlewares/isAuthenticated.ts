import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface RequestUser extends Request { user?: any }

export const isAuthenticated = (request: RequestUser, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;

    if (token) {
        jwt.verify(token.split(' ')[1], 'secretKey', (error: any, decoded: any): void => {
            
            if (error) {
                response.status(401).send({message:'You must be logged in to submit this request.'});
            } else {
                if (decoded && decoded.user) {
                    request.user = decoded.user;
                    next();
                } else {
                    response.status(401).send({message:'You must be logged in to submit this request.'});
                }
            }
        });
    } else {
        response.status(401).send({message:'You must be logged in to submit this request.'})
    }
}