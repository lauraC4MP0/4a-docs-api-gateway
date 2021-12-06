const patientResolver={
    Query:{
        patientById: async(_,{idUser, idPatient},{dataSources,userIdToken})=>{
            idUserToken=(await dataSources.authAPI.getUser(userIdToken)).idUser
            if(idUser==idUserToken){
                return await dataSources.patientAPI.patientById(idPatient);
            }else{
                return null;
            }
        }
    },
    Mutation:{}
};

module.exports=patientResolver;