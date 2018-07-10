const $ = require("jquery")
const Database = Object.create({}, {
getMovies: {
    value: () => {
      return $.ajax("http://localhost:3000/allMovies");
    }
  },
  postMovies: {
    value: (movie, plot, duration) => {
      return $.ajax({
        url: "http://localhost:3000/allMovies",
        method: "POST",
        data: {
            movie: movie,
            plot: plot,
            duraiton: duration
        }
      })
    }
  },
  deleteMovies: {
    value: (id) => {
      // console.log(id)
      return $.ajax({
        url: `http://localhost:3000/allmovies${id}`,
        method: "DELETE"
      })
    }
  }
})

module.exports = Database;