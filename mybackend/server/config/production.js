module.exports = {
  // disbable logging for production
  logging: false,
  seed: false,
  db: {
    url: 'mongodb://localhost:27017/nodeblog_prod'
  }
};
