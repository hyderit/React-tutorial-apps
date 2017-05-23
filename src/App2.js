import React from 'react';
//import PropTypes from 'prop-types';

/*const App = () => <h1>Hi</h1>*/

class App extends React.Component {
//  static defaultProps = {txt:"Default Value for Prop"}
  constructor() {
    super();
    this.state = {
      txt:'State Text'
    }
  }

  update ( e ) {
    this.setState({txt: e.target.value})
  }

  render(){

    return (
          <div>
            <Displayer update={this.update.bind(this)} />
            <Displayer update={this.update.bind(this)} />
            <Displayer update={this.update.bind(this)} />
            <h1>{this.state.txt}</h1>
            <Button>I <Heart/> React</Button>
            <Title text="1234" />
          </div>
    )
  }
}

const Displayer = (props) =>
  <input type = "text" onChange = {props.update}/>

const Button = (props) =>
  <button>{props.children}</button>


class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

const Title = (props) => <h1> Title:{props.text} </h1>

Title.propTypes = {
  text(props, propName, component){
    if (!(propName in props)) {
      return new Error (`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error (`${propName} length is less than 6`)
    }
  }
}


/*App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}*/

/*App.defaultProps = {
  txt: "Default Prop Value"
}*/

export default App
