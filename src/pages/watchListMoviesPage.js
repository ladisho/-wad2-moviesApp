import React, { useContext } from "react";
import UpcomingMoviesPageTemplate from "../components/templateUpcomingMoviesPage";
import AddReviewButton from '../components/buttons/addReview'
import { MoviesContext } from '../contexts/moviesContext'

const WatchListMoviesPage = props => {
    const context = useContext(MoviesContext);
    const watchList = context.upcoming.filter(m => m.watchList)

    return (
        <UpcomingMoviesPageTemplate
            movies={watchList}
            title={"WatchList Movies"}
            action={movie => <AddReviewButton movie={movie} />}
        />
    );
};

export default WatchListMoviesPage;
