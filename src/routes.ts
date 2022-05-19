import { Router } from 'express';
import ProductController from './controllers/ProductController';
const routes = Router();

routes.get('/product-list', ProductController.index);

export default routes;