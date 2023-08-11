import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Register routes
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
