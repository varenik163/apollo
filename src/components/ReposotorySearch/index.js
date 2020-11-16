import React, { Component } from 'react'
import { Repos } from "./Repos";

const styles = {
	/*display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column'*/
};
const inputStyles = {
	padding: '10px',
	width: 'auto',
	minWidth: '250px',
	borderRadius: '7px',
	borderColor: 'lightgray',
	borderStyle: 'solid',
	fontSize: '16px'
};

class RespositorySearch extends Component {
	state = {
		search: ''
	};

	render() {
		return (
			<div style={styles}>
				<input
					type={'text'}
					style={inputStyles}
					onChange={ev => this.setState({ search: ev.target.value })}
					placeholder={'Find repo'}
				/>
				<div style={{ maxWidth: '70%' }}>
					<Repos search={this.state.search} />
				</div>
			</div>
		);
	}
}

export default RespositorySearch
