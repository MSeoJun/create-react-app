import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import Say from './Say';
import Counter from './Counter';
import Event from './EventPractice';
import ValidationSample from './ValidationSample';
class App extends Component {
  render() {
    return (
    <center>
      <div>
        <Say/>
        <Counter/>
        <Event/> <br/>
        <ValidationSample/> <br/>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    </center>
    );
  }
}
export default App;
