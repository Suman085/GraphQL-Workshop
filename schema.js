import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Movie {
        id: ID
        name: String
        language: Language
        genres: [Genre]
        actors: [Actor]
    }
    type Actor {
        id: ID
        name: String
        nick: String
        imageUrl: String
    }
    enum Language {
        EN
        NP
        IN
    }
    enum Genre {
        HORROR,
        ROMANTIC,
        COMEDY
    }
    type Query {
        movies(genre:Genre): [Movie]
        actors: [Actor]
        actor(id:String): Actor
    }

    input ActorInput {
        id: ID
        name: String!
        nick: String!
        imageUrl: String
    }

    input MovieInput{
        id: ID
        name: String!
        language: Language!
        genres: [Genre]
        actors: [ActorInput]
    }
    type Mutation {
        createMovie(data:MovieInput): Movie
    }
`);

export default schema;
