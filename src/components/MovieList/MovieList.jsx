import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // onClick function to GET details of clicked-on movie
    // using movie.id
    const handleClick = id => {
        dispatch({ type: 'SET_SELECTED_MOVIE_ID', payload: id });
        history.push(`/details/${id}`);

    };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie.id)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;