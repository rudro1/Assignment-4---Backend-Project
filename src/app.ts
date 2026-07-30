import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes/index.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ success: true, message: 'OK', data: { status: 'healthy' } });
});

app.use('/api/v1', router);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
