import { nanoid } from "nanoid";

class Movie {
  constructor(id, { name, language, genres, actors }) {
    this.id = id;
    this.name = name;
    this.language = language;
    this.genres = genres;
    this.actors = actors;
  }
}

export let movies = [];
export let actors = [];

export const addMovie = (data) => {
  let movieId = nanoid();
  const actors = saveActors(data.actors);
  const movie = new Movie(movieId, { ...data, actors });
  movies = [...movies, movie];
  return movie;
};

export const saveActors = (data) => {
  let toSave = [];
  data.forEach((actor) => {
    const id = nanoid();
    let withId = { ...actor, id };
    toSave = [...toSave, withId];
  });
  actors = [...actors, ...toSave];
  return toSave;
};

export const getMoviesWithActor = (id) => {
  let moviesWithActor = [];
  movies.forEach((movie) => {
    if (movie.actors.find((actor) => actor.id === id)) {
      moviesWithActor.push(movie);
    }
  });
  return moviesWithActor;
};
