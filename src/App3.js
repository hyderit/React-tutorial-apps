import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---',
      val: 0
    }
    this.update=this.update.bind(this)
  }

  update ( e ) {
    this.setState(
      {
        currentEvent: e.type,
        val: this.state.val + 1
      }
    )
  }

  render(){

    return (
          <div>
            <textarea
              onKeyPress = {this.update}
              onCopy = {this.update}
              onCut = {this.update}
              onPaste = {this.update}
              onDoubleClick = {this.update}
              onFocus = {this.update}
              onBlur = {this.update}
              onTouchStart = {this.update}
              onTouchMove = {this.update}
              onTouchEnd = {this.update}
              cols="30"
              rows="10" />
            <h1>{this.state.currentEvent}</h1>
            <button onClick={this.update}>{this.state.val}</button>
          </div>
    )
  }
}

export default App
