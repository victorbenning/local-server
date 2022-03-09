import express from 'express';
import routes from './routes'

const app = express();
app.use(routes);

app.listen(8080, async () => {
  console.log('🚀 server started on port 8080!');
});