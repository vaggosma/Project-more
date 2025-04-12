const express = require('express');
const cors = require('cors');  // Import the CORS module

const app = express();
const port = 3001;

app.use(cors());  // Enable CORS for all routes

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
