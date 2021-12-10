const userResolver = {
    Query: {
        userDetailById: async(_, {id}, { dataSources, userIdToken }) => {
            if (id == userIdToken)
                return await dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },

        Mutation: {
        signUpUser:async (_, {userInput}, { dataSources }) => {        
            const authInput = {
                id      : userInput.id,
                username: userInput.username,
                password: userInput.password,
                name    : userInput.name,
                lastname: userInput.lastname,
                email   : userInput.email,
                }
                return await dataSources.authAPI.createUser(authInput);
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