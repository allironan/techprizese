import * as React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import CounterContainer from './components/CounterContainer';
//import "./styles.css";
//import logo from './components/logo.jpg';

render(//<Counter />, document.getElementById('main'),
    //<img src={logo} alt="" height="200px" />
    <CounterContainer />, document.getElementById('main')
);
// class App extends React.Component {
//     render() {
//       return (
//         <div className="App">
//           {/* <img src={logo} alt="" height="200px" /> */}
//           <CounterContainer />
//         </div>
//       );
//     }
//   }


// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>what weird things did slackbot say today</h1>
//       </div>
//     );
//   }
// }

// export default App;