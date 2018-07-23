/**
 * Basic example to pass values between parent and child components in React
 * Seems to be in line with this
 * http://stackoverflow.com/questions/24147331/react-the-right-way-to-pass-form-element-state-to-sibling-parent-elements
 * Now I have the state in parent and child. Is that good or bad? Why would I need it in child?
 * Could probably take that out
 * */

import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fieldVal: ""
      }
    }
  
    onUpdate = (val) => {
      this.setState({
        fieldVal: val
      })
    };
  
    render() {
      return (
        <div>
          <h2>Parent</h2>
          Value in Parent Component State: {this.state.fieldVal}
          <br/>
          <Child onUpdate={this.onUpdate} />
          <br />
          <OtherChild passedVal={this.state.fieldVal} />
        </div>
      )
    }
  }
  
  class Child extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fieldVal: ""
      }
    }
  
    update = (e) => {
      console.log(e.target.value);
      this.props.onUpdate(e.target.value);
      this.setState({fieldVal: e.target.value});
    };
  
    render() {
      return (
        <div>
          <h4>Child</h4>
          <input
            type="text"
            placeholder="type here"
            onChange={this.update}
            value={this.state.fieldVal}
          />
        </div>
      )
    }
  }
  
  class OtherChild extends React.Component {
    render() {
      return (
        <div>
          <h4>OtherChild</h4>
          Value in OtherChild Props: {this.props.passedVal}
        </div>
      )
    }
  }
  
  
  ReactDOM.render(
    <Parent />,
    document.getElementById('root')
  );