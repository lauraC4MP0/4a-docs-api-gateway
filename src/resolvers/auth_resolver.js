const userResolver = {
    Query: {
        userById: async(_, {idUser}, { dataSources, userIdToken }) => {
            if (idUser == userIdToken)
                return await dataSources.authAPI.getUser(idUser)
            else
                return null
        },
    },

        Mutation: {
        signUpUser:async (_, {userInput}, { dataSources }) => {        
            console.log(userInput);
                return await dataSources.authAPI.createUser(userInput);
        },

        logIn: async (_, { credentials }, { dataSources } ) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: async (_, { refresh }, { dataSources } ) => {
            return await dataSources.authAPI.refreshToken(refresh);
        },
    }
};

module.exports = userResolver;