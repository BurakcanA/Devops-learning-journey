const express = require("express");
const { Client } = require("pg");

const app = express();

let client;

async function connectWithRetry() {
  let delay = 2000
  while (true) {
    try {
      client = new Client({
        host: "postgres",
        user: "postgres",
        password: "postgres",
        database: "postgres",
        port: 5432,
      });
      await client.connect();

      console.log("Connected to Postgres");
      break;
    } catch (err) {
      console.log(`DB not ready, retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
      delay = Math.min(delay * 2, 30000)
    }
  }
}

app.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.send(result.rows);
  } catch (err) {
    res.status(500).send("Database not available");
  }
});

client.on("error", async () => {
  console.log("Lost DB connection. Reconnecting...");
  await connectWithRetry();
});

async function start() {
  await connectWithRetry();

  app.listen(3000, () => {
    console.log("🚀 Node is running on port 3000");
  });
}
start();

