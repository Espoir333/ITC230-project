const Movie = require("../model/movies")

// return all records
Movie.find({}).lean()
    .then((movies) => {
        console.log(movies);
    })    
.catch(err => console.log(err));
//Book.find({}).lean()

