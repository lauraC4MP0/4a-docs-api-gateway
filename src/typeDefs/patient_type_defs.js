const { gql } = require('apollo-server');

const patientTypeDefs = gql `
    input SignUpInput {
        id:Int!
        name: String!
        lastname: String!
        dateBirth:String!
        phoneNumber: Int!
        email: String!
        bloodType: String!
        is_active: Boolean!
    }
    type Patient {   
        id: Int!
        name: String!
        lastname: String!
        dateBirth: String!
        phoneNumber: Int!
        email: String!
        bloodType: String!
        is_active: Boolean!
        }
    extend type Mutation {
        signUpPatient(patientInput :SignUpInput): Patient
        }
    extend type Query{
        patientById(idUser: Int):Patient
    }
    `

module.exports = patientTypeDefs;