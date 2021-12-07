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
    Mutation:{
        createPatient: async(_,{idUser, patient},{dataSources,userIdToken})=>{
            idUserToke=(await dataSources.authAPI.getUser(userIdToken)).idUser
            if(idUser==idUserToken){
                return dataSources.patientAPI.createPatient(patient);
            }else{
                return null;
            }
        }
    }
};

module.exports=patientResolver;