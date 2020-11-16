import apollo from './services/Apollo'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RespositorySearch from "./components/ReposotorySearch";
import { ApolloProvider } from "react-apollo";


const App = () => (
	<ApolloProvider client={apollo.client}>
		<section style={{ padding: '30px 0 0 50px' }}>
			<div>
				<h2 style={{ paddingLeft: '5px' }}>My first Apollo app 🚀</h2>
			</div>
			<RespositorySearch />
		</section>
	</ApolloProvider>
);

export default App;
