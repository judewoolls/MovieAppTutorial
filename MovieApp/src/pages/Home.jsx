import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "The Dark Knight", year: 2008  },
        { id: 4, title: "Parasite", year: 2019}
    ]

    return (
        <div className="Home">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home