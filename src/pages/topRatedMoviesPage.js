import React, { useContext } from "react";
import PageTemplate from '../components/templateTopRatedMoviesPage'
import { MoviesContext } from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedMoviesPage = () => {
    const context = useContext(MoviesContext);
    const topRated = context.topRated.filter((m) => {  // New
        return !("favorites" in m);
    });

    return (
        <PageTemplate
            title="TopRated Movies"
            movies={topRated}  /* Changed */
            action={(movie) => {
                return <AddToFavoritesButton movie={movie} />;
            }}
        />
    );
};


export default TopRatedMoviesPage;
