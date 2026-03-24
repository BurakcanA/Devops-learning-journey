const express = require('express')
const app = express()
const { Client } = require('pg')

const client = new Client ({
    host: "postgres",
    user: "postgres",
    password: "postgres",
    database: "postgres",
    port: 5432
}) 

client.connect();

app.get('/', async (req,res) => {
    const result = await client.query('SELECT NOW()')
    res.send(result.rows)
})

app.listen('3000', () => {
    console.log('Node is running on port 3000')
})