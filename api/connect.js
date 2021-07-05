const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://user123:user123@cluster0.pvdjv.mongodb.net/netflix-clone?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    // await client.db("netflix-clone").command({ ping: 1 });

    console.log("Connected correctly to server");

    // const database = client.db("netflix-clone");
    // const series = database.collection("series");
    //
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

// module.exports = client;
