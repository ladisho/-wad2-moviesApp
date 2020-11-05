import React, { useContext } from "react";
import PageTemplate from '../components/templateUpcomingMoviesPage'
import { UpcomingMoviesContext } from '../contexts/upcomingMoviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'

const UpcomingMoviesPage = () => {
    const context = useContext(UpcomingMoviesContext);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={context.movies}
            action={(movie) => {
                return <AddToWatchlistButton movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;
