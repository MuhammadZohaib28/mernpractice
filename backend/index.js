import express from 'express';
import dotenv from 'dotenv';
import router from './routes.js'

const app = express();
dotenv.config();

app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})