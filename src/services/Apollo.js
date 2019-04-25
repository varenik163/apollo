import ApolloClient from "apollo-boost";

const gitHubToken = '2b4e25dd4f05d07ee3a4cc60baaf3507fe423771';
const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: 'bearer ' + gitHubToken
	}
});

export default { client }
