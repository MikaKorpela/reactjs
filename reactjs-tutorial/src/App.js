var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            msg: "W3Adda"
        };
        this.updateMsg = this.updateMsg.bind(this);
   }

    updateMsg() {
        this.setState({
            msg: "ReactJS"
        });
    }    

    render() {
        return (
           <div>
             <h1>Hello {this.state.msg}!</h1>
             <button onClick={this.updateMsg}>Click me!</button>
             <div>Name: {this.props.name}</div>
           </div>   
        )
    }
}

App.defaultProps = {
  name: "World",
};

ReactDOM.render(<App name="Foo"/>, document.getElementById('hello-world-wrapper'));

export default App;