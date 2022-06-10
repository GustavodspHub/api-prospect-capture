import express from 'express';
import cors from 'cors';
import setupRoutes from './config/router';
import { SERVER } from '../utils/constants';

const app = express();

app.use(express.json());

app.use(cors());

setupRoutes(app);

app.listen(SERVER.port, () =>
  console.log(`server is running at port ${SERVER.port}`),
);
