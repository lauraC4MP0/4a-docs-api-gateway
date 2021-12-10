const { gql } = require('apollo-server');
const ReportEvolutionTypeDefs = gql`
type  ReportEvolution {
date: String!
idPatient: Int!
age: Int!
weight: String!
reasonForConsultation: String!
currentIllness: String!
background: String!
diseases: String!
allergies: String!
hereditaryFamilyHistory: String!
physicalExam: String!
medicines: String!

}
input ReportEvolutionInput {
idPatient: Int!
weight: String!
reasonForConsultation: String!
currentIllness: String!
background: String!
diseases: String!
allergies: String!
hereditaryFamilyHistory: String!
physicalExam: String!
medicines: String!

}
extend type Query {
reportEvolutionById(id: Int!): [ReportEvolution]
}
extend type Mutation {
createReportEvolution(reportEvolution: ReportEvolutionInput!): ReportEvolution
}
`;
module.exports = ReportEvolutionTypeDefs;