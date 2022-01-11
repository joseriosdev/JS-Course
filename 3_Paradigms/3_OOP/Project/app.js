/*
- **Here's the Movie Info:**
    - Title
    - Year
    - Genre (considering a movie has only one genre)
    - Description
    - Book Based (true, false)


THE TASK
- At the start, will print a menu option with

This will:

- Create your own 'Database of movies first'
- The app allows to register movies
- Check if the given genre exists, if does, will save the movie into it
- If not, will create written genre and save the movie into it and alert the user that has created a new genre
- A Movie can only have one genre
- Print all the movies we've registered (just title)
- Print the movies based on a specific genre input
- Print the movies that were released with the given year
- Print movie by title
- Ask if the movie is from a book,
    if it is, create a new Book with the info: title, genre, author and the asociated movie
- User can also exists the app when menu option is displayed

NOTE:
bootstrap not mandatory
input validation is mandatory and required
*/

// --- Classes ---
// Movie
function Movie(title, year, genre, description) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.bookBased = false;
}

// Book
function Book(title, genre, author, movie) {
    this.title = movie.title;
    this.genre = movie.genre;
    this.author = author;
    this.movie = movie;
}

var genres = ['animation', 'horror', 'comedy'];
var booksDB = [];
var moviesDB = [
    new Movie('Tarzan', '1998', 'animation', 'Raised among apes'),
    new Movie('It', '2019', 'horror', 'Scary clown'),
    new Movie('Happy Gilmore', '1999', 'comedy', 'Crazy hockey/golfist player'),
    new Movie('Boggie el aceitoso', '2000', 'animation', 'Argentinian movie'),
    new Movie('The Lion King', '2000', 'animation', 'Long live the king!')
];


// - Static Classes -
// ScreenPrinter
function ScreenPrinter() {}

ScreenPrinter.alertMsg = function(msg) {
    alert(msg);
}

ScreenPrinter.menu = function() {
    var menu = `
        --- MENU ---
        Type any of these numbers:
        1. To print all the existing movies list.
        2. To save new movie.
        3. Prints movies released in certain year.
        4. Prints movie info by title.
        5. Prints movies by genre.
        6. Prints all Books.
        7. Exit app.
    `;
    
    return parseInt(prompt(menu));
}

ScreenPrinter.printCustomKeyValueList = function(objList, keys) {
    if (Array.isArray(objList) && Array.isArray(keys)) {
        var output = '>>> ';

        for (var obj of objList) {
            var s = '';
            for (var key of keys)
                s += (obj[key]+'\n');
            
            output += (s+'\n\n');
        }
        
        alert(output);
    } else {
        throw new Error('objList or keys are not Arrays');
        ScreenPrinter.alertMsg('Not a valid option, please, do it again.');
    }
}

// Helper
function Helper() {}

Helper.inputValidation = function(expected, current) {
    return expected.some(i => i === current);
}

Helper.checkGenre = function(genre) {
    if (!genres.some(g => g === genre)) {
        genres.push(genre);
        alert('New Genre Added!\n' + genre);
    }
}

// App
function App() {}

App.searcher = function(objList, keyWord, keysToDisplay) {
    var value = prompt(`Write the desired ${keyWord}:`);
    var filtered = objList.filter(obj => obj[keyWord] === value);

    if (filtered.length > 0)
        ScreenPrinter.printCustomKeyValueList(filtered, keysToDisplay);
    else
        ScreenPrinter.alertMsg('Nothing Found.');
}

App.createMovie = function() {
    var isFromBook = prompt('Type "yes" or "no" if the movie is book based.').toLowerCase();

    if (Helper.inputValidation(['yes','no'], isFromBook)) {
        var title = prompt('Movie Title please');
        var year = prompt('Movie Year please');
        var genre = prompt('Movie Genre please');
        var description = prompt('Movie Description please');
        var newMovie = new Movie(title, year, genre, description);

        Helper.checkGenre(genre);

        if (isFromBook === 'yes') {
            newMovie.isFromBook = true;

            var author = prompt('Book Author from where the Movie was inspired please');
            var newBook = new Book(author, newMovie);

            booksDB.push(newBook);
            moviesDB.push(newMovie);
        } else {
            moviesDB.push(newMovie);
        }
    } else {
        ScreenPrinter.alertMsg('Type "yes" or "no".');
    }
}

App.menuSwitch = function (inputMenu) {
    switch (inputMenu) {
        case 1:
            ScreenPrinter.printCustomKeyValueList(moviesDB, ['title']);
            break;
        case 2:
            App.createMovie();
            break;
        case 3:
            App.searcher(moviesDB, 'year', ['title','year']);
            break;
        case 4:
            App.searcher(moviesDB, 'title', ['title','year','description','genre']);
            break;
        case 5:
            App.searcher(moviesDB, 'title', ['title','genre']);
            break;
        case 6:
            ScreenPrinter.printCustomKeyValueList(booksDB, ['title','author']);
            break;
        case 7:
            ScreenPrinter.alertMsg('Exiting...');
            break;
        default:
            ScreenPrinter.alertMsg('Not a valid option, please, do it again.');
    }
}


// Runs the app
function init() {
    do {
        var inputMenu = ScreenPrinter.menu();

        if (isNaN(inputMenu))
            ScreenPrinter.alertMsg('Not a valid option, please, do it again.');
        else
            App.menuSwitch(inputMenu);
        
    } while (inputMenu !== 7)
}

init();