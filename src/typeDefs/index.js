//Se llama al typedef (esquema) de cada submodulo


const reportEvolutionTypeDefs = require('./reportEvolution_type_defs');
const authTypeDefs= require('./authTypeDefs');
const patientTypeDefs= require('./patientTypeDefs');


//Se unen
const schemasArrays = [reportEvolutionTypeDefs, authTypeDefs, patientTypeDefs];
//Se exportan
module.exports = schemasArrays;