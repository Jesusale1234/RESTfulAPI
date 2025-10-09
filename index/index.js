import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

const mongoString = process.env.DATABASE_URL;

// Function to connect to the MongoDB database.
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

// It makes the connection to the database, 
// then provides a message in the log mentioning 'Database Connected'.
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

// It initializes the HTTP parameters of the API.
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Working! 🚀');
});

// It relates the routes in routes.js as a group called "/api".
app.use('/api', routes);
console.log("/api routes loaded ✅");

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})