const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const Mongo = require("./routes/mongo");
app.use("/mongo", Mongo);

const MongoServers = require("./routes/serversRoute");
app.use("/mongoServers", MongoServers);

app.listen(4000);
