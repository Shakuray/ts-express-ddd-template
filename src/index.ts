require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
import routes from './routes';

const port : number = parseInt(process.env.PORT || "3000");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(routes)

app.listen(port, () => {
  console.log('✔ Server ready at port ' + port);
})
