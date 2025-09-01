const mongoose = require("mongoose"); 
const { MongoClient } = require("mongodb");

// replace <db_password> with your actual password
mongoose.connect("mongodb+srv://joshnawaikar:Babyjosh@034@cluster0.ogwgz.mongodb.net/maidfinder?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    // Example: create/use a DB and collection
    const db = client.db("testdb"); 
    const collection = db.collection("users");

    // Insert a sample document
    const result = await collection.insertOne({ name: "Joshna", role: "Developer" });
    console.log("Inserted:", result.insertedId);

    // Fetch documents
    const users = await collection.find().toArray();
    console.log("Users:", users);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
