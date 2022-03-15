import express, { json } from 'express';
import routes from './routes'

const app = express();
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(routes);


app.listen(3333, async () => {
  console.log('🚀 server started on port 8080!');
});