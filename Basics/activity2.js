const express = require('express');
const app = express();
const port = 8080;

// Route to match dates in the format YYYY-MM-DD
app.get('/events/:date(\\d{4}-\\d{2}-\\d{2})', (req, res) => {
    const { date } = req.params;
    res.send(`Date matched: ${date}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
