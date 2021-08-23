import {config} from 'dotenv'
config()

import express from 'express';
import createDatabaseConnection from './models/index.js';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
})

createDatabaseConnection().then(() => {
    app.listen(3000, ()=> {console.log("sall good")});
});

