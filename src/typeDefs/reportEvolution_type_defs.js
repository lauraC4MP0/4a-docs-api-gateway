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
<<<<<<< HEAD
}
input ReportEvolutionInput {
idPatient: Long!
=======


}
input ReportEvolutionInput {
idPatient: Long!

>>>>>>> 68908ddc08305f69222d73963327d12c672d3db1
}
extend type Query {
reportEvolutionByUsername(id: Long!): [ReportEvolution]
}
extend type Mutation {
createReportEvolution(reportEvolution: ReportEvolutionInput!): ReportEvolution
}
`;
module.exports = ReportEvolutionTypeDefs;