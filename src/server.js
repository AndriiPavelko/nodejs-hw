import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import {notFoundHandler} from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRoutes from './routes/notesRoutes.js';



const app = express();

app.use(pinoHttp());
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(express.json());

app.use(notesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);


await connectMongoDB();


app.listen(process.env.PORT , () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}/`);
});
