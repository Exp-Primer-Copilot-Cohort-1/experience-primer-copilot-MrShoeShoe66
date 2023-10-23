// create a simple express app
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comments = require('./comments');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    res.json(comments);
    }
);

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        comment: req.body.comment,

    };
    comments.push(newComment);
    res.json(comments);
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
