const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
// require('dotenv').config();
  
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://travellers:travellers01@cluster0.mj8od.mongodb.net/transport?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const services = client.db("transport").collection("services");
  // perform actions on the collection object
  app.get('/allServices', (req, res)=>{
    services.find({})
        .toArray((err, documents) => {
            res.send(documents)
        });
    });
});


app.get('/', (req, res) => {
    res.send("hello world!!")
});

app.listen(process.env.PORT || port)