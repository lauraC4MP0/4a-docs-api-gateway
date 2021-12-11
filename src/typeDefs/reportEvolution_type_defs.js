const { gql } = require('apollo-server');
const ReportEvolutionTypeDefs = gql`
type  ReportEvolution {
date: String
idPatient: Int!
age: Int
weight: String!
reason_for_consultation: String
current_illness: String
background: String!
diseases: String!
allergies: String!
hereditary_family_history: String
physical_exam: String
medicines: String!

}
input ReportEvolutionInput {
idPatient: Int!
weight: String!
reason_for_consultation: String
current_illness: String
background: String!
diseases: String!
allergies: String!
hereditary_family_history: String
physical_exam: String
medicines: String!

}
extend type Query {
reportEvolutionById(idPatient: Int!): [ReportEvolution]
}
extend type Mutation {
createReportEvolution(reportEvolution: ReportEvolutionInput!): ReportEvolution
}
`;
module.exports = ReportEvolutionTypeDefs;