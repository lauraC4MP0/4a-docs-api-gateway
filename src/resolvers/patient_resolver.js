const patientResolver={
    Query:{
        patientById: (_,{patientId},{dataSources})=>{
            console.log(dataSources.PatientAPI.patientById(patientId));
            return dataSources.PatientAPI.patientById(patientId);
        }
    },
        Mutation:{
        signUpPatient: async(_,{patientInput},{dataSources})=>{
            const patient= {
                id:patientInput.id,
                name: patientInput.name,
                lastname:patientInput.lastname,
                dateBirth:patientInput.dateBirth,
                phoneNumber: patientInput.phoneNumber,
                email: patientInput.email,
                bloodType: patientInput.bloodType
            }
            console.log(patient);
            return await dataSources.PatientAPI.createPatient(patient);
        }
    }
};

module.exports=patientResolver;