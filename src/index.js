import express from 'express';
import cors from 'cors';

import configEngine from './config/configEngine.js';
import connectDB from './config/db/configDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// config engine
configEngine(app);

// config routes
apiRoutes(app);

// connect db
connectDB();

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});