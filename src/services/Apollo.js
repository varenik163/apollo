import ApolloClient from "apollo-boost";

const gitHubToken = 'c7047f0d3e55e252ae842a61bb7fdaebfe8b6fbd';
const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: 'bearer ' + gitHubToken
	}
});

export default { client }
