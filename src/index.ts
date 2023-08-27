import express from 'express';
// import { ValidateError } from 'tsoa';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

// Register routes
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
