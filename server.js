// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
    res.send(`Lab 5 for ${process.env.NAME}`);
  })
  .post((req, res) => {
    console.log('POST request detected');
<<<<<<< HEAD
    res.send('Hello World')
=======
    console.log('Form data in res.body', req.body);
>>>>>>> 25aea25efc2b2c47c2a185b743f71a181e731fb6
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
