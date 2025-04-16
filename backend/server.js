const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 

app.get('/api/message', (req, res) => {
  res.json({ message: 'This is backend and test' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

