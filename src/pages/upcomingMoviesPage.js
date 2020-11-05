import React, { useContext } from "react";
import PageTemplate from '../components/templateUpcomingMoviesPage'
import { UpcomingMoviesContext } from '../contexts/upcomingMoviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviesPage = () => {
    const context = useContext(UpcomingMoviesContext);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={context.movies}
            action={(movie) => {
                return <AddToFavoritesButton movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;
