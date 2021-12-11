const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
 
    input SignUpInput {
        id: Int!
        username: String!
        password: String!
        name: String!
        lastname: String!
        email: String!
    }
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        lastname: String!
        email: String!
    }
    type Mutation {
        signUpUser(userInput :SignUpInput): UserDetail
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    type Query {
        userById(idUser: Int):UserDetail
    }
    `
module.exports = authTypeDefs;
