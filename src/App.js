import React, { Component } from 'react';
import router from './router';

class App extends Component {
	render() {
		return <div style={{ width: '100%', height: '100%'}}>{router}</div>;
	}
}

export default App;
