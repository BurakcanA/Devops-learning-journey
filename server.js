const express = require("express");
const { Client } = require("pg");

const app = express();

let client;

async function connectWithRetry() {
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
      console.log("DB not ready, retrying in 5s...");
      await new Promise(res => setTimeout(res, 5000));
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

async function start() {
  await connectWithRetry();

  app.listen(3000, () => {
    console.log("🚀 Node is running on port 3000");
  });
}

start();

client.on("error", async () => {
  console.log("Lost DB connection. Reconnecting...");
  await connectWithRetry();
});