import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

app.use('/api', routes);
console.log("Rutas /api registradas correctamente ✅");

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})