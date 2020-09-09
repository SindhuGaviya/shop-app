const express = require("express");
const cors=require('cors')
const app = express();
const setupDB = require("./config/database");
const router = require("./config/routes");
const port = 3033;

app.use(express.json());
app.use(cors())
app.use("/", router);

setupDB();

app.listen(port, () => {
  console.log('listening at the port number',port);
});