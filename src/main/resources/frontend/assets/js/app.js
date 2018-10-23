const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todomodels: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/todoModel'}).done(response => {
			this.setState({todomodels: response.entity._embedded.todomodels});
		});
	}

	render() {
		return (
			<TodoModel todomodels={this.state.todomodels}/>
		)
	}
}