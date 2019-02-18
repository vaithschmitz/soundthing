import React, { Component } from 'react';
import Drums from "./components/Drums.js";
import Header from "./components/layout/header.js"
import Tone from 'tone';

class App extends Component {
  state={
   drums: [
      {
        id: 1, 
        type: "C"
      },
      {
        id: 2, 
        type: "D"
      },
      {
        id: 3, 
        type: "E"
      },
      {
        id: 4, 
        type: "F"
      },
      {
        id: 5, 
        type: "G"
      },
      {
        id: 6, 
        type: "A"
      },
      {
        id: 7, 
        type: "B"
      },
      {
        id: 8, 
        type: "C2"
      },
      // {
      //   id: 9, 
      //   type: "Reverb"
      // },
      // {
      //   id: 10, 
      //   type: "Delay"
      // }
    ]
  }
 
  hitDrum = (type) =>{
    // let chr = new Tone.Chorus(4, 2.5, 0.5).toMaster();

    // const chrsynth = new Tone.PolySynth(6).connect(chr);
    const synth = new Tone.PolySynth(6).toMaster();

    switch (type){
      case 'C':
        synth.triggerAttackRelease("C3", '8n')
        break;
        default:
        break;
        case 'D':
        synth.triggerAttackRelease("D3", '8n')
        break;
        case 'E':
        synth.triggerAttackRelease("E3", '8n')
        break;
        case 'F':
        synth.triggerAttackRelease("F3", '8n')
        break;
        case 'G':
        synth.triggerAttackRelease("G3", '8n')
        break;
        case 'A':
        synth.triggerAttackRelease("A3", '8n')
        break;
        case 'B':
        synth.triggerAttackRelease("B3", '8n')
        break;
        case 'C2':
        synth.triggerAttackRelease("C4", '8n')
        break;
    }
  }


  render() {
    return ( 
      <div className="App">
      <Header />
        <Drums drums={this.state.drums} hitDrum={this.hitDrum}/>
      </div>
    );
  }
}


export default App;

