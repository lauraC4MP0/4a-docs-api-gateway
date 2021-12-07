const {ApolloServer}=require('apollo-server');
const typeDefs=require('./typeDefs');
const resolvers=require('./resolvers');
const AuthAPI=require('./dataSources/auth_api');
const PatientAPI=require('./dataSources/patient_api');
const reportEvolutionAPI=require('./dataSources/reportEvolution_api');
const authentication=require('./utils/authentication');
const server=new ApolloServer({
    context:authentication,
    typeDefs, resolvers,
    dataSources:()=>({
        PatientAPI:new PatientAPI(),
        AuthAPI:new AuthAPI(),
        reportEvolutionAPI:new reportEvolutionAPI(),
    }),
    introspection:true,
    playground: true,
});

server.listen(process.env.PORT||4000).then(({url})=>{
    console.log(`🏥 Server ready at ${url}`);
})