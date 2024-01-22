const express = require('express');
const app = express();
const rout = require('./routes');

app.use('/routes', rout);

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
