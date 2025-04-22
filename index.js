import express from 'express';
const app = express();

// Import db.js
import localDB from './db.js';
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

