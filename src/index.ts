import express from 'express';
// import { ValidateError } from 'tsoa';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

// Register routes
RegisterRoutes(app);

// app.use(function notFoundHandler(_req, res: ExResponse) {
//   res.status(404).send({
//     message: 'Not Found',
//   });
// });

// app.use(function errorHandler(err: unknown, req: ExRequest, res: ExResponse, next: NextFunction): ExResponse | void {
//   if (err instanceof ValidateError) {
//     console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
//     return res.status(422).json({
//       message: 'Validation Failed',
//       details: err?.fields,
//     });
//   }
//   if (err instanceof Error) {
//     return res.status(500).json({
//       message: 'Internal Server Error',
//     });
//   }
//
//   next();
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
