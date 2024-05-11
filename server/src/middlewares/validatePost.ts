import { body } from 'express-validator';

export const validatePost = [
    body('title').notEmpty().withMessage('Title is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('image').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Image is required');
        }
        
        return true;
    }),
];
