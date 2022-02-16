const express = require('express');
const {
  getCommentsByArticleId,
} = require('./controllers/comments-controllers');

const app = express();

app.use(express.json());

app.get('/api/articles/:article_id/comments', getCommentsByArticleId);

app.use((err, req, res, next) => {
  // handle customs
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

app.use((err, req, res, next) => {
  // handle 500s
  console.log(err);
  res.status(500).send({ msg: 'Server error' });
});

module.exports = app;
