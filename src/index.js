import express from 'express';
import dotenv from 'dotenv/config.js';
import cors from 'cors';

import configEngine from './config/configEngine.js';
import connectDB from './config/db/configDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const port = process.env.PORT || 8080;

// config to send data from client to server and get simpler data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config engine
configEngine(app);

// config routes
apiRoutes(app);

// connect db
connectDB();

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});