const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // ใช้ PORT ของ Render

app.get('/', (req, res) => {
  res.send('Selfbot is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

module.exports = () => {
  console.log('✅ keepAlive function executed!');
};