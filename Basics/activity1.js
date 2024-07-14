const express = require('express');
const app = express();
const port = 8080;

app.get('/products/:category/:subCategory?', (req, res) => {
    const { category, subCategory } = req.params;
    if (subCategory) {
        res.send(`Showing ${subCategory} in ${category} category`);
    } else {
        res.send(`Showing products for category: ${category}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
