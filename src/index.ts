import express from 'express';
const app = express();

// Import db
import localDB from './db.js';
process.env.DB_HOST = process.env.DB_HOST || './db.sqlite3';
const db = new localDB(process.env.DB_HOST);


console.log("Backend starting...");

app.post('/create', (req, res) => {
    res.send('create response');
  })

app.get('/login', (req, res) => {
    res.send('login response');

  })

// Unknown route
app.use(function(req, res, next){
    res.status(404).send('Page not found');
  });


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

