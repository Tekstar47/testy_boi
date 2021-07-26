import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();
const { PORT, HOST } = process.env;

const app = express();
app.use(cors());
// app.use(helmet());
app.use(express.json());

/**
 * const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
*/


app.get('/', (req, res) => {
  res.status(200).send('Looking good people');
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${HOST}:${PORT}`);
});
