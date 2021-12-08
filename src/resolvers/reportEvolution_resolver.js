const reportEvolutionResolver ={
    Query:{
        reportEvolutionById: async({_, idPatient} , {dataSources, id}) => {
            idCon =(await dataSources.patient_api.getId(id)).idPatient
            if(idPatient == idCon)
                return await dataSources.reportEvolution_api.reportByidPatient(idPatient)
            else
                return null
        }

    },



    Mutation: {
        createReportEvolution: async({_, idPatient} , {dataSources, id}) => {
            idCon =(await dataSources.patient_api.getId(id)).idPatient
            if(reportEvolution.idPatient =idCon)
                return await dataSources.reportEvolution_api.createReport(reportEvolution);
            else
                return null
        }
    }
};
module.exports=reportEvolutionResolver;