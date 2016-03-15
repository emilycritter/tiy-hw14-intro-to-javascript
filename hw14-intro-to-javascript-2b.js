// Create an array of movies with budgets of less than 100
// and another array of movies that starred Leonard DiCaprio.
var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

// Low budget movies
function checkLowBudget (movie) {
  if(movie.budget < 100) {
    return true;
  } else {
    return false;
  }
}
lowBudgetMovies = movies.filter(checkLowBudget);
lowBudgetMovies = lowBudgetMovies.map(function(obj){
   return obj.title;
});
console.log("Low budget movie array: ");
console.log(lowBudgetMovies);

// Leonardo DiCaprio movies
function checkStarringLeo (stars) {
  var found = false;
  stars.forEach(function(star) {
    if (star === "Leonardo DiCaprio") {
      found = true;
    }
  });
  return found;
}

function checkLeoMovie (movie) {
  if(checkStarringLeo(movie.stars)) {
    return true;
  } else {
    return false;
  }
}
leoMovie = movies.filter(checkLeoMovie);
leoMovie = leoMovie.map(function(obj){
   return obj.title;
});
console.log("Leonardo DiCaprio movie array: ");
console.log(leoMovie);
