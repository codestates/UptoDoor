import express, {json} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 4444;

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
}));

app.use(cookieParser);
app.use(json());

app.get('/', (req, res) => {
  console.log('ddd');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`UptoDoor listening at http://localhost:${port}`);
});
