const Celebrity = require('../models/Celebrity.model');

require('./config/db.config');

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
    // mongoose.connection.close();
})
.catch(err => console.log(`An error occured: ${err}`));


