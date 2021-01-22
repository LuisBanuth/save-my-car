import express from 'express';
//import path from 'path';
//import 'express-async-errors';
import routes from './routes';
//import errorHandler from './errors/handler';
import cors from 'cors';

require("dotenv-safe").config();

// import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
//app.use(errorHandler);

app.listen(3333);

