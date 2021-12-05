//Se llama al typedef (esquema) de cada submodulo


const reportEvolutionTypeDefs = require('./reportEvolution_type_defs');
const authTypeDefs= require('./authTypeDefs');


//Se unen
const schemasArrays = [reportEvolutionTypeDefs, authTypeDefs];
//Se exportan
module.exports = schemasArrays;
