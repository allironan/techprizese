import * as React from 'react';
import Counter from './Counter';
// import logo from './logo.jpg';
import "./styles.css";



class CounterContainer extends React.Component {
    //to_do_items: ['i fell from my chair', 'to ops or not', 'HOWDY']
    // console.log(logo);

    state = {
      slackbot_items: ['to ops or not', 'i fell from my chair','HOWDY'],
      times: [0, 0, 0]
      };
    
      IncToDo = sayingindex => {
        //const cur_items_list = this.state.slackbot_items;
        const cur_count_list = this.state.times;
        cur_count_list[sayingindex] = cur_count_list[sayingindex] + 1;
        this.setState(cur_count_list);
      };
  

      render () {
        const slackbotcomp = [];
        for (let i = 0; i < this.state.slackbot_items.length; i++) {
          slackbotcomp.push(
            <div key={i}>
              <Counter
                index = {i}
                onInc={this.IncToDo}
                saying={this.state.slackbot_items[i]}
                count={this.state.times[i]}
              />
            </div>
          );
        }
        return (
          <div className = "items">
            <h1> how many times has slackbot said these annyoing things today</h1>
            {/* <img components={logo} alt="" height="200px" /> */}
            {slackbotcomp}
            <h1> reviews!</h1>
            <text>"the count for the first one should be 2937184773, i love it tehe" - saachi </text>
          </div>
          
        );
      }


      //notes
      //state should be held in here
      //incrementing should happen in the other file
      //sends back the index here 


      //old render
      // <h1> 'to ops or not'</h1>
      //           {/* <h1>{this.state.count[0]}</h1>
      //           <button onClick={this.increment1}>Increment</button> */}
      //       <h1>'i fell from my chair'</h1>
      //       {/* <h1>{this.state.count[1]}</h1>
      //       <button onClick={this.increment2}>Increment</button> */}
      //       <h1>'HOWDY'</h1>
      //         {/* <h1>{this.state.count[2]}</h1>
      //         <button onClick={this.increment3}>Increment</button> */}

      //6.10.20
      // increment1 = () => {
      //   this.state.count[0] = this.state.count[0] + 1
      //   this.setState({
      //       count: [this.state.count[0], this.state.count[1], this.state.count[2]]
      //             });
      // };

      // increment2 = () => {
      //   this.state.count[1] = this.state.count[1] + 1
      //   this.setState({
      //       count: [this.state.count[0], this.state.count[1], this.state.count[2]]
      //             });
      // };

      // increment3 = () => {
      //   this.state.count[2] = this.state.count[2] + 1
      //   this.setState({
      //       count: [this.state.count[0], this.state.count[1], this.state.count[2]]
      //             });
      // };
    


      //OLD
    // state = {
    //     c: [0, 0, 0]
    // };
    
    // //  increment = count => {
    // //     count += 1;
    // // };
    // increment = upgrade => {
    //     this.state.c[upgrade] = this.state.c[upgrade] + 1;
    // }


    //   render() {
    //     const counters = [];
    //     for (let i = 0; i < counters.length; i++) {
    //       counters.push(
    //         <div key={i}>
    //           <Counter
    //             index = {i}
    //             onInc = {this.increment}
    //           />
    //         </div>
    //       );
    //     }
    //     return (
    //       <div>
    //         {counters}
    //       </div>
    //     );
    //   }
 
}
  export default CounterContainer;