const Database = require("saveNload.js")
const $ = require("jquery")
console.log("things")


movieValue: {
    value: () => {
      const movieInput = document.querySelector("#movie").value
      const plotInput = document.querySelector("#plot").value
      const durationInput = document.querySelector("#duration").value
      saveNLoad.postMovies(movieInput, plotInput, durationInput)
        .then(response => {
            return movieValue
        })
    }


$( "#submitBtn" ).click(function() {
    console.log("woo button clicked!")
  }

//making a movie card to put on DOM
  movieCard: {
    value: (title, plot, duration) => {
        const movieContainer = document.querySelector("#movieContainer");

        let card = document.createElement("div");
        card.setAttribute("class", "movieCard");

        let movieEl = document.createElement("h3");
        userEl.textContent = title;

        let plotEl = document.createElement("h2");
        plotEl.id = plot;
        plotEl.textContent = plot;

        let durationEl = document.createElement("h2");
        durationEl.textContent = duraiton;

        card.appendChild(movieEl);
        card.appendChild(plotEl);
        card.appendChild(durationEl);

        movieContainer.appendChild(card);

        return movieContainer;
    }
  })
