exports.handleCustomErrors = (err, req, res, next) => {
  // handle customs
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
};

exports.handle500s = (err, req, res, next) => {
  // handle 500s
  console.log(err);
  res.status(500).send({ msg: 'Server error' });
};
