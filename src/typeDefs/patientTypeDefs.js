const { gql } = require('apollo-server');

const patientTypeDefs = gql `
    input SignUpInput {
        id: Int!
        name: String!
        lastname: String!
        dateBirth: Date!
        phoneNumber: Int!
        email: String!
        bloodType: String!
    }

    type UserDetail {
        id: Int!
        name: String!
        lastname: String!
        dateBirth: Date!
        bloodType: String!
        }

    type Mutation {
        signUpPatient(patientInput :SignUpInput): Patient
        }
    `;

module.exports = patientTypeDefs;
