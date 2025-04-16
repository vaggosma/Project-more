const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 

app.get('/api/message', (req, res) => {
  res.json({ message: 'Ilove you Μούτρο μου' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
