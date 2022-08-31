const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require("./helpers/create_router.js");

const cors = require('cors');
app.use(cors())
app.use(express.json());


MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client)=> {
    const db = client.db("hotel");
    const hotelCollection = db.collection("hotel_checkin")
    const hotelRouter = createRouter(hotelCollection);
    app.use('/api/hotel', hotelRouter);
})
.catch(console.error);

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  }); 
