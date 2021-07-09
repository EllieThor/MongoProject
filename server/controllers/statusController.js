var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
var ObjectId = require("mongodb").ObjectID;

exports.updateStatus = async (req, res) => {
  var _id = req.body._id;

  try {
    MongoClient.connect(url, function (errorConnect, db) {
      if (errorConnect) throw errorConnect;
      var dbo = db.db("mydb");
      var myQuery = { _id: ObjectId(req.body._id) };
      var newValues = { $set: { Status: req.body.Status == 0 ? 1 : 0 } };
      console.log("Query : ", myQuery, newValues);

      dbo.collection("servers").updateOne(myQuery, newValues, function (err1, res1) {
        if (err1) throw err1;
        console.log("1 document updated");
        res.send(res1);
        db.close();
      });
    });
  } catch (err) {
    console.log("Err : ", err);
    res.send("error updated mongodb");
  }
};
