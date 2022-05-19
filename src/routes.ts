import { Router } from 'express';
import MainController from './controllers/MainController';
const routes = Router();

routes.get('/json', MainController.index);

export default routes;