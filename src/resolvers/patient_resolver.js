const patientResolver={
    Query:{
        patientById: (_,{id},{dataSources})=>{
            console.log(dataSources.PatientAPI.patientById(id));
            return dataSources.PatientAPI.patientById(id);
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
        },
        deletePatient:(_,{id},{dataSources})=>{
            return dataSources.PatientAPI.deletePatient(id);
        },
        updatePatient:async(_,{patientInput},{dataSources})=>{
            const patient={
                id:patientInput.id,
                name: patientInput.name,
                lastname:patientInput.lastname,
                dateBirth:patientInput.dateBirth,
                phoneNumber: patientInput.phoneNumber,
                email: patientInput.email,
                bloodType: patientInput.bloodType
            }
            return await dataSources.PatientAPI.updatePatient(patient);
        }
    }
};

module.exports=patientResolver;