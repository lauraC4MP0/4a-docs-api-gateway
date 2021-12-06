const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PatientAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.patient_api_url;
    }

    async getId(id) {
        return await this.get('/id', id);
    }
    async getName(name) {
        return await this.get(`/name/${name}`);
    }
    async getLastname(lastname) {
        return await this.get(`/lastname/${lastname}`);
    }
    async getDateBirth(DateBirth) {
        return await this.get(`/dateBirth/${dateBirth}`);
    }
    async getEmail(Email) {
        return await this.get(`/email/${email}`);
    }
    async getPhoneNumber(phoneNumber) {
        return await this.get(`/PhoneNumber/${phoneNumber}`);
    }
    async getBloodType(bloodType) {
        return await this.get(`/lastname/${bloodType}`);
    }
    async getIs_active(is_active) {
        return await this.get(`/is_active/${is_active}`);
    }
    async setPhoneNumber(phonenumber) {
        phonenumber = new Object(JSON.parse(JSON.stringify(phonenumber)));
        return await this.post(`/phoneNumber/${phoneNumber}`);
    }
    async setEmail(email) {
        email = new Object(JSON.parse(JSON.stringify(email)));
        return await this.post(`/email/${email}`);
    }
    async setIs_active(is_active) {
        is_active = new Object(JSON.parse(JSON.stringify(is_active)));
        return await this.post(`/is_active/${is_active}`);
    }

}
module.exports = PatientAPI;