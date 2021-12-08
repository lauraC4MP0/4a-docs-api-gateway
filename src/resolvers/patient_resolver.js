const patientResolver={
    Query:{
        patientById: async(_,{idUser},{dataSources,userIdToken})=>{
            if(idUser==userIdToken){
                return await dataSources.patientAPI.patientById(idPatient);
            }else{
                return null;
            }
        }
    },
    Mutation:{
        signUpPatient: async(_,{patientInput},{dataSources})=>{
            return dataSources.patientAPI.signUpPatient(patientInput);
        }
    }
};

module.exports=patientResolver;