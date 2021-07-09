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

const serversRoute = require("./routes/serversRoute");
app.use("/servers", serversRoute);

const StatusRoute = require("./routes/statusRoute");
app.use("/servers/status", StatusRoute);

app.listen(4000);
