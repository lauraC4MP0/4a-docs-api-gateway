const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PatientAPI extends RESTDataSource {

    constructor() {
       super();
       this.baseURL = serverConfig.patient_api_url;
 }

async patient(patient) {
    patient = new Object(JSON.parse(JSON.stringify(patient)));
    return await this.get(`/user/`patient);}

async patient(patient) {
    patient = new Object(JSON.parse(JSON.stringify(patient)));
    return await this.post(`/user/create/`patient);}
}
module.exports = PatientAPI;
