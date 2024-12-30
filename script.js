// Sample movie data
const movies = [
    { id: 1, title: "Transformer 1", releaseDate: " 20 September 2024", genre: "action", cast: "Brian Tyree Henry, Chris Hemsworth", image: "transformer.jpg" },
    { id: 2, title: "Laughing Hearts", releaseDate: "20 March 2025", genre: "comedy", cast: "Seth Rogen, Margot Robbie", image: "lh.jpg" },
    { id: 3, title: "Culpa mía", releaseDate: "8 june 2023", genre: "drama", cast: "Nicole Wallace", image: "cm.jpg" },
    { id: 4, title: "Serendipity Moments", releaseDate: "28 February 2025", genre: "romance", cast: "Zendaya, Timothée Chalamet", image: "ss.webp" },
    { id: 5, title: "Deadpool & Wolverine", releaseDate: "25 July 2024", genre: "action", cast: "Ryan Reynolds,Hugh Jackman", image: "Deadpool.jpg" },

];

let filteredMovies = movies;

function renderMovies(moviesToRender) {
    const movieList = document.getElementById('moviesList');
    movieList.innerHTML = ''; 

    moviesToRender.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" />
            <h3>${movie.title}</h3>
        `;
        movieItem.onclick = () => showMovieDetails(movie);
        movieList.appendChild(movieItem);
    });
}

function showMovieDetails(movie) {
    document.getElementById('movieTitle').innerText = movie.title;
    document.getElementById('movieReleaseDate').innerText = movie.releaseDate;
    document.getElementById('movieGenre').innerText = movie.genre;
    document.getElementById('movieCast').innerText = movie.cast;

    document.getElementById('movieDetailModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('movieDetailModal').style.display = 'none';
}

function filterMovies(genre) {
    if (genre === 'all') {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(movie => movie.genre === genre);
    }
    renderMovies(filteredMovies);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    renderMovies(filteredMovies);
});

document.getElementById('movieDetailModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();  
    }
});


renderMovies(filteredMovies);
