const express = require('express')
const app = express()
const mongodb = require("mongodb")
const path = require("path");
const cors = require("cors");

mongodb.MongoClient.connect('mongodb://localhost:27017/trello', (err, client) => {
  if (err) return console.log(err)

  console.log('Connected to database')

  db = client.db('trello');

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
})

app.use([cors(), express.static(path.join(__dirname, "/frontend/dist"))])

app.get('/boards', function (req, res) {
    db.collection('boards').find().toArray((err, result) => {
        if (err) return console.log(err)
        console.log(result)
        res.send({
          boards: result
        })
      })
});

app.delete("/boards/:id", function(req, res) {
  db.collection("boards").remove(
    { _id: new mongodb.ObjectID(req.params.id) },
    function(err, obj) {
      if (err) return console.log(err);

      console.log(obj.result.n + " record(s) deleted");

      res.send({
        _id: req.params.id
      });
    }
  );
});