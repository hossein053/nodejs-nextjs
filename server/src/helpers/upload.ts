import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: Function) {
        cb(null, 'upload/');
    },
    filename: function (req: Request, file: Express.Multer.File, cb: Function) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
}

export const upload = multer({ storage: storage, fileFilter: fileFilter })


