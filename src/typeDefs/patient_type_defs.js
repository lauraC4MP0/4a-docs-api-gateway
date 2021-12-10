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

    type PatientDetail {   
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
        signUpPatient(patientInput :SignUpInputPatient): PatientDetail
        }

    extend type Query{
        patientById(id: Int):PatientDetail
    }
    `

module.exports = patientTypeDefs;