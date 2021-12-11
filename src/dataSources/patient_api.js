const {RESTDataSource}=require('apollo-datasource-rest');
const serverConfig=require('../server');

class PatientAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=serverConfig.medic_api_url;
    }

    async createPatient(patient){
        patient=new Object(JSON.parse(JSON.stringify(patient)));
        return await this.post(`/patients/`, patient);
    }

    async patientById(id){
        return await this.get(`/patients/${id}`);
    }

}

module.exports=PatientAPI;