const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'admin',
  host: 'database',
  database: 'personality_tests',
  password: 'secret',
  port: 5432,
});

app.get('/api/tests', async (req, res) => {
  const result = await pool.query('SELECT * FROM tests');
  res.json(result.rows);
});

app.listen(5000, () => {
  console.log('Backend działa na porcie 5000');
});


