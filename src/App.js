import React, { Component } from 'react';
import Drums from "./components/Drums.js";
import Tone from 'tone';
import {Chord} from 'tonal';


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
      }
    ]
  }
 
  hitDrum = (type) =>{
    let chr = new Tone.Chorus(4, 2.5, 0.5).toMaster();

    const synth = new Tone.PolySynth(6).connect(chr);

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

    }

  }


  render() {
    const cmaj7 = Chord.notes("CMaj7")
    console.log(cmaj7)
    return ( 
      <div className="App">
        <Drums drums={this.state.drums} hitDrum={this.hitDrum}/>
      </div>
    );
  }
}


export default App;

