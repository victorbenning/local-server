import { Router } from 'express';
import QueueController from './controllers/QueueController';
const routes = Router();

routes.post('/', QueueController.event)

export default routes;