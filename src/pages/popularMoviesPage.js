import React, { useContext } from "react";
import PopularMoviesPageTemplate from '../components/templatePopularMoviesPage'
import { MoviesContext } from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularMoviesPage = () => {
    const context = useContext(MoviesContext);
    const popular= context.popular.filter((m) => {  // New
        return !("favorite" in m);
    });

    return (
        <PopularMoviesPageTemplate
            title="Popular Movies"
            movies={popular}  /* Changed */
            action={(movie) => {
                return <AddToFavoritesButton movie={movie} />;
            }}
        />
    );
};


export default PopularMoviesPage;