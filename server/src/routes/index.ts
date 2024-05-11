import { Router } from "express";
import multer from "multer";
import { isAuthenticated, validatePost, validateUser } from "../middlewares";
import { upload } from "../helpers";
import authController from "../controllers/auth-controller";
import postControllers from "../controllers/post-controllers";


const api = Router();

api.post('/api/register', validateUser, multer().none(), authController.register);

api.post('/api/login', multer().none(), authController.login);

api.post('/api/user/add_post', isAuthenticated, upload.single('image'), validatePost, postControllers.store);

export { api }