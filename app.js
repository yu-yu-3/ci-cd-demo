const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('CI/CD работает');
});
module.exports = app;