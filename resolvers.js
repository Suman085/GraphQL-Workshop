import { nanoid } from "nanoid";
import {
  actors,
  addMovie,
  getMoviesWithActor,
  movies,
  saveActors,
} from "./database";

const resolvers = {
  movies: ({ genre }) => {
    if (genre) {
      return movies.filter((movie) => movie.genres.includes(genre));
    }
    return movies;
  },
  actors: () => actors,
  actor: ({ id }) => {
    const actor = actors.find((actor) => actor.id === id);
    const movies = getMoviesWithActor(id);
    return {
      ...actor,
      movies,
    };
  },
  createMovie: ({ data }) => {
    const movie = addMovie(data);
    return movie;
  },
};

export default resolvers;
