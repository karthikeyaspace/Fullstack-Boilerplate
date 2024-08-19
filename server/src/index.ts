import express from 'express';
import cors, { CorsOptions } from 'cors';
import config from './config/env';
import user from './routes/user.route';
import admin from './routes/admin.route';

// databases
// mongo connection
// firebase connection
// supabase connection


const app = express();
const port = config.PORT || 3001;
app.use(express.json());

const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use('/user', user);
app.use('/admin', admin);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/settings', settingsRoutes);

app.get('/', (req, res) => {
  res.send('Express server - https://github.com/karthikeyaspace');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;