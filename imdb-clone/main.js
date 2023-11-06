let movies =
// sends a request to https://yesno.wtf/api/
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(moviesFromApi => {
        movies = moviesFromApi;
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    });

const inputElement = document.querySelector("input");
console.log(inputElement)
inputElement.addEventListener("input", function() {
    const inputText = inputElement.value;
    console.log(inputText);
    const moviesFetchedFromApi = movies.length > 0;
    if(moviesFetchedFromApi) {
        console.log(movies);
        const matchingMovies = movies.filter(movie => movie.title.includes(inputText));

        renderMovies(matchingMovies);
    }
})

function renderMovies(movies) {
    const ul = document.querySelector('ul');
    ul.innerHTML = "";
    console.log(ul)

    movies.forEach(function(movie) {
        const li = document.createElement('li');
        li.innerText = movie.title;
        ul.appendChild(li);
    })

}