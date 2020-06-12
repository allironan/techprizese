import * as React from 'react';
import CounterContainer from './CounterContainer';


export default class Counter extends React.Component {
  
  onIncrement = () => {
    this.props.onInc(this.props.index);
  };

  render() {
    return (
      <div className="slacksaying">
        <h1>{this.props.saying}</h1>
        <h2>{this.props.count}</h2>
        <button className="incButton" onClick={this.onIncrement}>ew he said it again</button>
      </div>
    );
  }
}








  // // state = {
  // //   count: 0
  // // };

  // onIncrement = () => {
  //   this.props.onInc(this.props.index);
  // };

  // render () {
  //   return (
  //     <div>
  //       {/* <h1>the amount of times slackbot has said howdy is:</h1>
  //       <h1>{this.state.count}</h1> */}
  //       <button onClick={this.onIncrement}>Increment</button>
  //     </div>
  //   );
  // }
//}