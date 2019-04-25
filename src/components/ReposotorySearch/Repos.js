import {Query} from "react-apollo";
import React from "react";
import {GET_REPOSITOPRIES} from "../../services/GraphQL/Queries";

export const Repos = ({ search }) => (
	<Query
		query={GET_REPOSITOPRIES}
		variables={{ search }}
	>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;

			return data.search.edges.map(({ node }) => (
				<div key={node.resourcePath}>
					<a href={'https://github.com' + node.resourcePath}>
						<h3>{node.name}</h3>
					</a>
					<small>{node.updatedAt}</small>
					<div dangerouslySetInnerHTML={{ __html: node.descriptionHTML }} />
				</div>
			));
		}}
	</Query>
);
