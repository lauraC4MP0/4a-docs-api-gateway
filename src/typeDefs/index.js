//Se llama al typedef (esquema) de cada submodulo


const reportEvolutionTypeDefs = require('./reportEvolution_type_defs');

//Se unen
const schemasArrays = [reportEvolutionTypeDefs];
//Se exportan
module.exports = schemasArrays;