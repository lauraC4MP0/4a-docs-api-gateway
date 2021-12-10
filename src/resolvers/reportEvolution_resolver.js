const reportEvolutionResolver ={
    Query:{
        reportEvolutionById: async(_, {idPatient} , {dataSources, id})=>{
            idCon =(await dataSources.patient_api.getId(id)).id
            if(idPatient == idCon)
                return await dataSources.reportEvolution_api.reportByidPatient(idPatient)
            else
                return null
        }

    },



    Mutation: {
     createReportEvolution: async(_, {reportEvolutionInput} , {dataSources, id})=>{
        idCon =(await dataSources.patient_api.getpatient(id)).id
        console.log(idCon);
        if(reportEvolutionInput.idPatient == idCon)
         return await dataSources.reportEvolution_api.createReport(reportEvolution);
        else
         return null
        }
    }
};
module.exports=reportEvolutionResolver;