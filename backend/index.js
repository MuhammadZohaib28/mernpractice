import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/hello', (req, res) => {
    res.status(200).json({message: "Hello from the backend!"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})