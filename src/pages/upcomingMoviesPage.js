import React, { useContext } from "react";
import PageTemplate from '../components/templateUpcomingMoviesPage'
import { MoviesContext } from '../contexts/moviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'

const UpcomingMoviesPage = () => {
    const context = useContext(MoviesContext);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={context.upcoming}
            action={(movie) => {
                return <AddToWatchlistButton movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;
