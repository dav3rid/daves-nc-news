const { checkArticleExists } = require('../models/articles-models');
const { selectCommentsByArticleId } = require('../models/comments-models');

exports.getCommentsByArticleId = (req, res, next) => {
  // const article_id = req.params.article_id;
  const { article_id } = req.params;

  Promise.all([
    selectCommentsByArticleId(article_id),
    checkArticleExists(article_id),
  ])
    .then(([comments]) => {
      res.status(200).send({ comments: comments });
    })
    .catch((err) => {
      next(err);
    });
};

// simultaneously
// only when necessary
