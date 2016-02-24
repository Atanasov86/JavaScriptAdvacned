var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);


		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				var li = Array.prototype.slice.call(moviesContainer.firstElementChild.childNodes);
				li.forEach(function (li) {
					var currentButton = li.querySelector('button');
					currentButton.addEventListener('click', function (){
						var id = li.getAttribute('data-id');
						genre.deleteMovieById(id);
						moviesContainer.firstElementChild.removeChild(li);
					})
				});


				moviesContainer.setAttribute('data-genre-id', genreId);

				li.forEach(function (li){
					li.addEventListener('click', function (e) {
						if (e.target.tagName !== 'BUTTON') {
							while (detailsContainer.firstChild) {
								detailsContainer.removeChild(details.firstChild);
							}

							var id = li.getAttribute('data-id');
							var movies = genre.getMovies();
							var movie = movies.filter(function (m) {
								return m._id == id;
							})[0];
							loadDetails(movie);
						}
					})
				})
			}
		});


		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
	}

	function loadDetails (movie) {
		var actorsH3 = document.createElement('h3'),
			actorsUl = document.createElement('ul'),
			detailsContainer = document.getElementById('details'),
			reviewH3 = document.createElement('h3'),
			reviewUl = document.createElement('ul');

		actorsH3.innerHTML = '<strong>Actors</strong>';
		detailsContainer.appendChild(actorsH3);
		var actors = movie.getActors();

		actors.forEach(function (actor){
			var actorLi = document.createElement('li'),
				actorName = document.createElement('h4'),
				actorBio = document.createElement('p'),
				actorBorn = document.createElement('p');

			actorName.innerText = actor.name;
			actorBio.innerHTML = '<strong>Bio: </strong>' + actor.bio;
			actorBorn.innerHTML = '<strong>Born: </strong>' + actor.born;

			actorLi.appendChild(actorName);
			actorLi.appendChild(actorBio);
			actorLi.appendChild(actorBorn);
			actorsUl.appendChild(actorLi);
		});
		// append Actors
		detailsContainer.appendChild(actorsUl);

		reviewH3.innerHTML = '<strong>Review </strong>';

		detailsContainer.appendChild(reviewH3);
		var reviews = movie.getReviews();

		reviews.forEach(function (review){
			var reviewLi = document.createElement('li'),
				reviewAuthor = document.createElement('h4'),
				reviewContent = document.createElement('p'),
				reviewDeleteButton = document.createElement('button');

			reviewAuthor.innerText = review.author;
			reviewContent.innerHTML = '<strong>Bio: </strong>' + review.content + '</br>' +
			'<strong>Date: </strong>' + review.date;

			//create delete button for review
			reviewDeleteButton.innerText = 'Delete movie';
			reviewDeleteButton.value = 'Delete';

			reviewDeleteButton.addEventListener('click', function (){
				movie.deleteReview(review);
				reviewUl.removeChild(reviewLi)
			});

			reviewLi.appendChild(reviewAuthor);
			reviewLi.appendChild(reviewContent);
			reviewLi.appendChild(reviewDeleteButton);
			reviewUl.appendChild(reviewLi);
		});

		detailsContainer.appendChild(reviewUl);
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li'),
				movieDeleteButton = document.createElement('button');

			movieDeleteButton.innerText = 'Delete movie';
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			liMovie.appendChild(movieDeleteButton);

			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	scope.loadHtml = loadHtml;
}(imdb));