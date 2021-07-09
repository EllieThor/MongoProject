var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
var ObjectId = require("mongodb").ObjectID;

exports.getAllServers = async (req, res) => {
  var serverName = req.query.ServerName;

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { ServerName: { $regex: `${serverName}` } };

    if (query !== "")
      dbo
        .collection("servers")
        .find(query)
        .toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    else
      dbo
        .collection("servers")
        .find()
        .toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
  });
};
// http://www.localhost:4000/mongoServers/getAllServers
// ServerName`, `IP`, `CompanyID`, `Status`

exports.insertServer = async (req, res) => {
  var myobj = {
    ServerName: req.body.ServerName,
    IP: req.body.IP,
    CompanyID: req.body.CompanyID,
    Status: req.body.Status,
  };

  try {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo.collection("servers").insertOne(myobj, function (err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        res.send("Success insert user");
        db.close();
      });
    });
  } catch (err) {
    console.log("Err : ", err);
    res.send("Error insert user");
  }
};
// http://www.localhost:4000/mongoServers/insertServer?ServerName=zoeServer&IP=1234&CompanyID=2&Status=1

exports.updateStatus = async (req, res) => {
  try {
    MongoClient.connect(url, function (errorConnect, db) {
      if (errorConnect) throw errorConnect;
      var dbo = db.db("mydb");
      var myQuery = { _id: ObjectId(req.body.Id) };
      var newValues = { $set: { Status: `${req.body.Status === 0 ? 1 : 0}` } };
      console.log("Query : ", myQuery, newValues);

      dbo.collection("customers").updateOne(myQuery, newValues, function (err1, res1) {
        if (err1) throw err1;
        console.log("1 document updated");
        res.send("1 document updated");
        db.close();
      });
    });
  } catch (err) {
    console.log("Err : ", err);
    res.send("error delete user");
  }
};
