import { Router } from 'express';
import QueueController from './controllers/QueueController';
const routes = Router();

routes.get('/', QueueController.index)

export default routes;