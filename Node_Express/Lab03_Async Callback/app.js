const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Express async callback demo');
});

app.get('/async-demo', (req, res) => {
  setTimeout(() => {
    res.json({
      message: 'This response came after an async callback',
      status: 'done'
    });
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
