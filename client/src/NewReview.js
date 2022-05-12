import {useEffect, useState} from 'react';
import ReviewMovieCard from './ReviewMovieCard';

function NewReview ({user}){
const [searchTerm, setSearchTerm]=useState('');
const [results, setResults] = useState([])

const SEARCH_API = "https://api.themoviedb.org/3/search/movie/?api_key=588aaae9ab726a4bb69fc3367191a762&query=";


function handleSubmit(e){
    e.preventDefault();
    fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then(data => setResults(data.results))
}

function handleOnChange(e){
setSearchTerm(e.target.value)
}

console.log(results)
const moviePosters= results.map(result => <ReviewMovieCard {...result} key={result.id} user={user}/>)

return(
    <>
    <header>
        <p>Search Movie</p>
        <form onSubmit={handleSubmit}>
        <input className="search" type="search" placeholder="Search..."
        value={searchTerm} onChange={handleOnChange}/>
        </form>
    </header>
    <div className="movie-container">
    {moviePosters}
    </div>
    </>
)

}
export default NewReview