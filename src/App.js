import React, {Component} from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js'

class App extends Component {
  render() {

    const pads = [];
    let notes = ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4'];
    for(let i = 0; i< 16; i++){
      pads.push(<Drumpad note = {notes[i]}/>)
    }

    return ( 
      <div className="App"> 

        {pads}
      </div>
    );
  }
  }


export default App;

