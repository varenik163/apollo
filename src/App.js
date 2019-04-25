import apollo from './services/Apollo'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RespositorySearch from "./components/ReposotorySearch";
import { ApolloProvider } from "react-apollo";


const App = () => (
	<ApolloProvider client={apollo.client}>
		<div>
			<div style={{ textAlign: 'center' }}>
				<h2>My first Apollo app 🚀</h2>
			</div>
			<RespositorySearch />
		</div>
	</ApolloProvider>
);

export default App;
