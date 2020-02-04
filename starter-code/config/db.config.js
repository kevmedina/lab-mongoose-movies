const mongoose = require('mongoose');

const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
