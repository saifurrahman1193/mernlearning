const express = require('express');
const path = require('path')
const app = express();
const logger = require("./middleware/logger")

// init middlware
app.use(logger);

app.get('/api/members', (req, res) => {
    const members = require("./data/members.js")
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    res.send(req.params.id);
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});