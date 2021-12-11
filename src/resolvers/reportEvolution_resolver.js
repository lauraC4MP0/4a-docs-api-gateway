const reportEvolutionResolver ={
    Query:{
        reportEvolutionById: async(_, {idPatient} , {dataSources})=>{
           
                return await dataSources.reportEvolutionAPI.reportByidPatient(idPatient)
            
        }

    },



    Mutation: {
     createReportEvolution: async(_,{reportEvolution} , {dataSources})=>{
        
        //idCon =(await dataSources.patient_api.getpatient(id)).id
        
        console.log(reportEvolution);
         return await dataSources.reportEvolutionAPI.createReport(reportEvolution);
        
        }
    }
};
module.exports=reportEvolutionResolver;