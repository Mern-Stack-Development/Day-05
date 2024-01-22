const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/example', (req, res) => {
  console.log(req.body); // Access the parsed data in req.body
  res.send('POST request received');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
