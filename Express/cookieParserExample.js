const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

app.get('/dashboard', (req, res) => {
  const userId = req.cookies.user;
  // Retrieve user data from the database based on the userId
  res.send(`Welcome to the dashboard, User ${userId}!`);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});