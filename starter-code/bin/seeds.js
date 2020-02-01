const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "Show ME the MONEY!"
    },
    {
        name: "Denzel Washington",
        occupation: "Actor",
        catchPhrase: "My man!"
    },
    {
        name: "John Witherspoon",
        occupation: "Actor",
        catchPhrase: "BANG! BANG! BANG!"
    }
];

Celebrity.create(celebrities)
.then(celebritiesFromDB => {
    console.log(celebritiesFromDB);
    mongoose.connection.close();
})
.catch(err => console.log(`An error occured: ${err}`));


