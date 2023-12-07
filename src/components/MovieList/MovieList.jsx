import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';

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
        <>

            <Typography variant='h4' marginBottom={'10px'}>Movie List</Typography>

            <div style={{ textAlign: 'center' }}>
                <Grid container
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    // textAlign={'center'}
                >


                    <section className="movies">

                        {movies.map(movie => {
                            return (

                                <Grid item margin={'10px'} className='hover'
                                    onClick={() => handleClick(movie.id)}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    <Paper elevation={12}>
                                        <Card style={{ height: '400px', width:'250px' }}>
                                            <CardContent>

                                                <div key={movie.id}>
                                                    <h3>{movie.title}</h3>
                                                    <img src={movie.poster} alt={movie.title} />
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </Paper>
                                </Grid>
                            );

                        })}

                    </section>

                </Grid>
            </div>

        </>
    );
}

export default MovieList;