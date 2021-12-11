const {ApolloServer}=require('apollo-server');
const typeDefs=require('./typeDefs');
const resolvers=require('./resolvers');
const AuthAPI=require('./dataSources/auth_api');
const PatientAPI=require('./dataSources/patient_api');
const authentication=require('./utils/authentication');
const ReportEvolutionAPI = require('./dataSources/reportEvolution_api');
const server=new ApolloServer({
    context:authentication,
    typeDefs, resolvers,
    dataSources:()=>({
        PatientAPI:new PatientAPI(),
        authAPI:new AuthAPI(),
        reportEvolutionAPI:new ReportEvolutionAPI()
    }),
    introspection:true,
    playground: true,
});

server.listen(process.env.PORT||4000).then(({url})=>{
    console.log(`🏥 Server ready at ${url}`);
})