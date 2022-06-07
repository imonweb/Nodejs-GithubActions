const express = require('express');
const app = express();

app.get('/names', (req, res) => {
  res.send('Imon');
})

app.listen(4000, () => {
  console.log("Server is running on port 4000");
})