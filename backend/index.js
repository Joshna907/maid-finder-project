const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://joshnawaikar:IMccHlSSPzNpF4Qd@cluster0.ogwgz.mongodb.net/maidfinder?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("testdb");
    const collection = db.collection("users");

    const result = await collection.insertOne({ name: "Joshna", role: "Developer" });
    console.log("Inserted:", result.insertedId);

    const users = await collection.find().toArray();
    console.log("Users:", users);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
