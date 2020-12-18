# Assignment 1 - ReactJS app.

Name: John Shotade

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Three endpoints – topRated, popular and similar movies which were gotten from tmdb api using an api key generated from tmdb api.
 + Three views – To display a topRated, popular and watchList movies on the localhost.
 + Public and private routes – Introduction of public and private routes is done to restrict access to only the user and not the masses. The user has to log in and authentication is done before granting access to all movies and views.
 + etc
 + etc

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

The installation of npm(node project manager) is needed to run the app locally after cloning the repository from git.
The creation of the .env file to add the tmdb api key
## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated – get a list of topRated movies.
+ https://api.themoviedb.org/3/movie/popular – get a list of popular movies.
+ https://api.themoviedb.org/3/movie/${id}/similar – get a list of similar movies.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][topRated movies page]
>Displays a list of topRated movies. It supports viewing movie details,reviews and similar movies by clicking on the movie card.

![][watchList movies page]
>Displays user watchlist movies selection being added from the upcoming movies pages. It supports adding a user review. A user review is added by clicking on the add a review button underneath a movie card.Once clicked the review form page is displayed with the movie card of that particular movie and a web form for the user to add a review. Once done, a user can either click on the submit button to submit the review which takes the user back to the watchList page or reset the web form which clears all user inputs.

![][popular movies page]
>Displays a list of popular movies. It supports the same user interactions as the topRated movies page mentioned above.



## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/watchList (protected) – displays watchList movies selection.
+ /movies/topRated (protected) – displays topRated movies.
+ /movies/popular (protected) – displays popular movies.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][cardLink]
> Clicking on a similar movie card in the movie details page of a particular movie displays the movie details of that movie above the list of similar movies.


## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png