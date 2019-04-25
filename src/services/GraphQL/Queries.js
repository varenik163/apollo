import gql from "graphql-tag";

export const GET_REPOSITOPRIES = gql`
	query Search($search: String!) {
		search(query: $search, type: REPOSITORY, first: 100) {
			edges {
				node {
					... on Repository {
						name,
						descriptionHTML,
						updatedAt,
						forks {
							totalCount
						},
						stargazers {
							totalCount
						},
						releases(first: 5) {
							totalCount,
							nodes {
								author { ... on User { name } }
							}
						},
						resourcePath
					}
				}
			},
			repositoryCount
		}
	}
`;
