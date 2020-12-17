import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import WatchListMoviesPage from './pages/watchListMoviesPage';
import PopularMoviesPage from './pages/popularMoviesPage';
import { useState, useMemo } from "react";
import { UserContext } from "./hooks/UserContext";
import { Login } from './pages/'


import PublicRoute from './hooks/PublicRoute'
import PrivateRoute from './hooks/PrivateRoute'




const App = () => {
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <BrowserRouter>
            <div className="jumbotron">
                <SiteHeader />
                <div className="container-fluid">
                    <MoviesContextProvider>
                        <GenresContextProvider>    {/* NEW */}
                            <UserContext.Provider value={value}>
                                <Switch>
                                    <PublicRoute restricted={true} component={Login} path="/" exact />
                                    <PrivateRoute path="/movies/watchList" component={WatchListMoviesPage} />
                                    <PrivateRoute path="/movies/topRated" component={TopRatedMoviesPage} />
                                    <PrivateRoute path="/movies/popular" component={PopularMoviesPage} />
                                    <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                                    <PrivateRoute path="/movies/upcoming" component={UpcomingMoviesPage} />
                                    <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                                    <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                                    <PrivateRoute path="/movies/:id" component={MoviePage} />
                                    <Route path="/" component={HomePage} />
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </UserContext.Provider>     
                        </GenresContextProvider>    {/* NEW */}
                    </MoviesContextProvider>
                </div>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));