//Se llama al typedef (esquema) de cada submodulo


const ReportEvolutionTypeDefs = require('./reportEvolution_type_defs');
const authTypeDefs= require('./auth_type_defs');
const patientTypeDefs= require('./patient_type_defs');


//Se unen
const schemasArrays = [ReportEvolutionTypeDefs, authTypeDefs, patientTypeDefs];
//Se exportan
module.exports = schemasArrays;
