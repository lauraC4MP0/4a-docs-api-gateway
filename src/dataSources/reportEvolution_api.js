const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class ReportEvolutionAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.ReportEvolution_api_url;
        
    }

    async createReport(reportEvolution){
        report = new Object(JSON.parse(JSON.stringify(reportEvolution)));
        return await this.post(`/reportEvolution`, reportEvolution);
    }

    async reportByidPatient(idPatient){
        return await this.get(`/reportEvolution/${idPatient}`)
    }

}
module.exports = ReportEvolutionAPI;