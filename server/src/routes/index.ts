import { Router } from "express";
import multer from "multer";
import UserControllers from "../controllers/user-controllers";
import authController from "../controllers/auth-controller";

const api = Router();
const formData = multer();

api.post('/api/register', formData.none(), authController.register);

api.post('/api/login', formData.none(), authController.login);

api.get('/api/users', UserControllers.index);

api.get('/api/users/:id', UserControllers.find);

api.post('/api/users', formData.none(), UserControllers.store);

api.delete('/api/users/:id', UserControllers.delete)

api.post('/api/users/:id', UserControllers.update)

export { api }