import React, {Component} from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      isDist: true
      // isRev: false,
      // isDelay: false
    }

    this.handleDist = this.handleDist.bind(this)
  }

  handleDist(){
    this.setState({
      isDist: !this.state.isDist
    })
  }

  render() {

    const pads = [];
    let notes = ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4'];
    for(let i = 0; i< 16; i++){
      pads.push(<Drumpad note = {notes[i]} isDist = {this.state.isDist}/>)
    }

    return ( 
      <div>
      <div className="App"> 
        {pads}
      </div>
      <div>
      <button onClick={(e) => {this.handleDist()}}>Distortion</button>
      <button>Reverb</button>
      <button>Delay</button>
      </div>
      </div>
    );
  }
  }


export default App;
