var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
//var url = "mongodb+srv://localhost:27017@mystor.ylyvc.gcp.mongodb.net/admin";

var ObjectId = require("mongodb").ObjectID;

//
exports.getAllUsers = async (req, res) => {
  var name = req.query.name;

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // var query = { name: { $regex: name } };
    // var query = { "name": name };

    // dbo.collection("customers").find(query).toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result)
    //     db.close();
    // });

    dbo
      .collection("customers")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
};
// http://www.localhost:4000/mongo/getAllUsers

exports.insertUser = async (req, res) => {
  var myobj = {
    name: req.query.name,
    address: req.query.address,
    test: "test123",
  };

  try {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo.collection("customers").insertOne(myobj, function (err, result) {
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
// http://www.localhost:4000/mongo/insertUser?name=shay&address=erqweqwewqew

exports.updateUser = async (req, res) => {
  var Id = req.query.id;
  //5fdc63dc521fb31844b20f7e
  try {
    MongoClient.connect(url, function (errorConnect, db) {
      if (errorConnect) throw errorConnect;
      var dbo = db.db("mydb");
      var myquery = { _id: ObjectId(Id) };
      var newvalues = { $set: { name: "shay7999901", address: "Canyon 7999902" } };
      console.log("Query : ", myquery, newvalues);

      dbo.collection("customers").updateOne(myquery, newvalues, function (err1, res1) {
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

exports.deleteUser = async (req, res) => {
  var name = req.query.name;
  try {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myquery = { name: name };
      dbo.collection("customers").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send("1 document deleted");
        db.close();
      });
    });
  } catch (err) {
    console.log("Err : ", err);
    res.send("error delete user");
  }
};
