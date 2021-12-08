const patientResolver = require('./patient_resolver');

const reportEvolutionResolver = require('./reportEvolution_resolver');

const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(patientResolver, reportEvolutionResolver, authResolver);

module.exports = resolvers;
