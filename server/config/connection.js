const mongoose = require('mongoose');
//need to add DB for mongoose connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;