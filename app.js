const express = require('express');
const {
  getCommentsByArticleId,
} = require('./controllers/comments-controllers');
const { handleCustomErrors, handle500s } = require('./errors/errors');

const app = express();

app.use(express.json());

app.get('/api/articles/:article_id/comments', getCommentsByArticleId);

app.use(handleCustomErrors);
app.use(handle500s);

module.exports = app;
