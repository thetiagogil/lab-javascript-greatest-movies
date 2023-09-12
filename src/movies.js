// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map(function (element) {
        return movies.director;
    })

    // missing bonus

    return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const director = moviesArray.filter(function (element) {
        if (element.director === "Steven Spielberg") {
            return true;
        }
    });

    const genre = director.filter(element => {
        if (element.genre.includes("Drama")) {
            return true;
        }
    });

    return genre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScores = moviesArray.reduce((accumulator, value) => {
        if (value.score !== undefined) {
            return accumulator + value.score
        } else {
            return accumulator;
        }
    }, 0);

    const avgScores = sumScores / moviesArray.length;
    const roundScore = Math.round(avgScores * 100) / 100;

    if (moviesArray.length === 0) { return 0 };

    return roundScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => {
        return element.genre.includes("Drama");
    });

    const avg = scoresAverage(dramaMovies);

    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const order = moviesArray.toSorted((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        }
    }
    );

    return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = moviesArray
        .map(element => element.title)
        .sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            if (a === b) {
                return 0;
            }
        }
        )
        .slice(0, 20);

    return movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const allDurations = moviesArray.map(element => element.duration

    );

    return allDurations;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }