const { gql } = require('apollo-server');
const ReportEvolutionTypeDefs = gql `
type  ReportEvolution {
date: LocalDate!
idPatient: Long!
age: Integer!
weight: String!
reason_for_consultation: String!
current_illness: String!
background: String!
diseases: String!
allergies: String!
hereditary_family_history: String!
physical_exam: String!
medicines: String!


}
input ReportEvolutionInput {
idPatient: Long!

}
extend type Query {
reportEvolutionByUsername(id: Long!): [ReportEvolution]
}
extend type Mutation {
createReportEvolution(reportEvolution: ReportEvolutionInput!): ReportEvolution
}
`;
module.exports = ReportEvolutionTypeDefs;