const { RESTDataSource } = require('apollo-datasource-rest') ;

const serverConfig = require('../server') ;

class AuthAPI extends RESTDataSource  {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }
    async createUser(userInput)  {
        userInput = new Object(JSON.parse(JSON.stringify(userInput)));
        return await this.post(`/user/`, userInput);
    }

    async getUser(idUser)  {
        return await this.get(`/user/${idUser}/`);
    }

    async authRequest(credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials) ;
    }

    async refreshToken(token){
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

}
    
module.exports = AuthAPI;
