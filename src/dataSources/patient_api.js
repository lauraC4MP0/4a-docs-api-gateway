const {RESTDataSource}=require('apollo-datasource-rest');
const serverConfig=require('../server');

class PatientAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=serverConfig.medic_api_url;
    }

    async createPatient(patientInput){
        patientInput=new Object(JSON.parse(JSON.stringify(patientInput)));
        return await this.post(`/patients/`, patientInput);
    }

    async patientById(id){
        return await this.get(`/patients/${id}`);
    }

    async deletePatient(id){
        return await this.put(`/patients/delete/${id}`);
    }

    async updatePatient(patient){
        patient=new Object(JSON.parse(JSON.stringify(patient)));
        return await this.put(`/patients/update/${patient.id}`,patient);
    }

}

module.exports=PatientAPI;