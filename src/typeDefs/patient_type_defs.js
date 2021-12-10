const { gql } = require('apollo-server');

const patientTypeDefs = gql `
    input SignUpInputPatient {
        id:Int!
        name: String!
        lastname: String!
        dateBirth:String!
        phoneNumber: Int!
        email: String!
        bloodType: String!
    }

    type Patient {   
        id: Int!
        name: String!
        lastname: String!
        dateBirth: String!
        phoneNumber: Int!
        email: String!
        bloodType: String!
        }

    extend type Mutation {
        createPatient(patientInput :SignUpInputPatient): Patient
        }

    extend type Query{
        patientById(idUser: Int):Patient
    }
    `

module.exports = patientTypeDefs;