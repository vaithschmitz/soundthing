import React, {Component} from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js'

class App extends Component {
  render() {

    const pads = []
    for(let i = 0; i< 16; i++){
      pads.push(<Drumpad/>)
    }

    console.log(<Drumpad/>)
    return ( 
      <div className="App"> 
        {pads}
      </div>
    );
  }
  }


export default App;

