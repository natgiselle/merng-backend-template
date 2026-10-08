const typeDefs = `
    type Query {
        hello: String
        me: String
    }

    type Mutation {
        register(username: String!, email: String!, password: String!): String
        login(username: String!, password: String!): String
    }
`;

// add YOUR OWN object types here, e.g. type Book { id: ID title: String }
// a [Book] return type means a list, and Book! means it can't be null

module.exports = typeDefs;