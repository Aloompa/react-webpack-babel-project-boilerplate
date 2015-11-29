const React = require('react');

class App extends React.Component {

    constructor () {
        super();

        this.state = {
            greeting: 'Hello World!'
        };
    }

    toggleGreeting () {
        console.log('toggle');
        this.setState({
            greeting: 'Hello There!'
        });
    }

    render () {
        return (
            <div onClick={this.toggleGreeting.bind(this)}>{this.state.greeting}</div>
        );
    }

}

module.exports = App;
