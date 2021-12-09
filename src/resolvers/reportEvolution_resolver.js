const reportEvolutionResolver ={
    Query:{
<<<<<<< HEAD
        reportEvolutionById: async({_, idPatient} , {dataSources, id}) => {
            idCon =(await dataSources.patient_api.getId(id)).idPatient
=======
        reportEvolutionById: async({_, idPatient} , {dataSources, id})=>{
            idCon =(await dataSources.patient_api.getId(id)).id
>>>>>>> fc3816ee122b226f5b336ba724673290f35bb478
            if(idPatient == idCon)
                return await dataSources.reportEvolution_api.reportByidPatient(idPatient)
            else
                return null
        }

    },



    Mutation: {
<<<<<<< HEAD
        createReportEvolution: async({_, idPatient} , {dataSources, id}) => {
            idCon =(await dataSources.patient_api.getId(id)).idPatient
            if(reportEvolution.idPatient =idCon)
                return await dataSources.reportEvolution_api.createReport(reportEvolution);
            else
                return null
        }
=======
     createReportEvolution: async({_, reportEvolutionInput} , {dataSources, id})=>{
        idCon =(await dataSources.patient_api.getId(id)).id
        if(reportEvolutionInput.idPatient == idCon)
         return await dataSources.reportEvolution_api.createReport(reportEvolution);
         else
         return null
    }
>>>>>>> fc3816ee122b226f5b336ba724673290f35bb478
    }
};
module.exports=reportEvolutionResolver;