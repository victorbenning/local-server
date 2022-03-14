import { Router } from 'express';
import QueueController from './controllers/QueueController';
const routes = Router();

routes.post('/claim', QueueController.claim)
routes.post('/done', QueueController.done)
routes.get('/show', QueueController.show)

export default routes;