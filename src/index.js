import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'

const sample = {
    adult: false,
    backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    belongs_to_collection: {
        id: 10,
        name: "Star Wars Collection",
        poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
        backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
    },
    budget: 55000000,
    genres: [
        {
            id: 14,
            name: "Crime"
        },
        {
            id: 12,
            name: "Thriller"
        },
        {
            id: 878,
            name: "Drama"
        }
    ],
    homepage:
        "https://http://www.jokermovie.net/",
    id: 181808,
    imdb_id: "tt2527336",
    original_language: "en",
    original_title: "Joker",
    overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    popularity: 44.208,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    production_companies: [
        {
            id: 1,
            logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
            name: "DC Entertainment",
            origin_country: "US"
        },
        {
            id: 11092,
            logo_path: null,
            name: "Warner Bros Pictures",
            origin_country: "US"
        },
        {
            id: 2,
            logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            name: "DC Comics",
            origin_country: "US"
        },
        {
            id: 11093,
            logo_path: null,
            name: "Joint Effort",
            origin_country: "US"
        },
        {
            id: 3,
            logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            name: "Village Roadshow Pictures",
            origin_country: "US"
        },
        {
            id: 11094,
            logo_path: null,
            name: "Bron Studios",
            origin_country: "US"
        },
        {
            id: 4,
            logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            name: "Creative Wealth Media Finance",
            origin_country: "US"
        }
    ],
    production_countries: [
        {
            iso_3166_1: "CA",
            name: "Canada"
        },
        {
            iso_3166_1: "US",
            name: "United States of America"
        }
    ],
    release_date: "2019-10-02",
    revenue: 1074251311,
    runtime: 122,
    spoken_languages: [
        {
            iso_639_1: "en",
            name: "English"
        }
    ],
    status: "Released",
    tagline: "Put on a happy face.",
    title: "Joker",
    video: false,
    vote_average: 7,
    vote_count: 9692
};

const movies = [sample, sample, sample];

const App = () => {
    return (
        <div className="jumbotron">
            <MoviePage movie={sample} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
