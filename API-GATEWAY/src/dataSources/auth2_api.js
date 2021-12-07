
class AuthAPI extends RESTDataSource  {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }
    async userCreate(user)  {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('/user/create', user);
    }

    async getUser(userid)  {
        return await this.get('/user/Id/',user) ;
    }
    async userDetail(user)  {
        return await this.get('/user/',user) ;
    }

    async authRequest(credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post('/login/' , credentials ) ;
    }

     async refreshToken(token){
         token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
         return await this.post('/refresh/', token);
     }

     }
    
module.exports = AuthAPI;