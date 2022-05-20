import express from "express";
import resolvers from "./resolvers";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

//setting up a express server-> with some port
//expose graphQL Api--
//getMovies
//getAMovie
//getActors
//getActor

const app = express();

app.get("/", (req, res) => {
  res.send("Lets GO!!");
});

app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);

app.listen(8000, () => console.log("Listening at port 8000"));
