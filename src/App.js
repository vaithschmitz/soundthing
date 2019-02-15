import React, { Component } from 'react';
import Drums from "./components/Drums.js";
import Tone from 'tone';
import {Chord} from 'tonal';


class App extends Component {
  state={
   drums: [
      {
        id: 1, 
        type: "Arp"
      },
      {
        id: 2, 
        type: "A"
      },
      {
        id: 3, 
        type: "B"
      },
      {
        id: 3, 
        type: "C"
      },
      {
        id: 4, 
        type: "D"
      },
      {
        id: 4, 
        type: "E"
      }
    ]
  }
 
  hitDrum = (type) =>{

    const rev = new Tone.Reverb().toMaster();

    const synth = new Tone.PolySynth(6).connect(rev);

    switch (type){
      case 'Arp':
        synth.triggerAttackRelease("C3", '8n')
        break;
        default:
        break;
        case 'A':
        synth.triggerAttackRelease("D3", '8n')
        break;
        case 'B':
        synth.triggerAttackRelease("E3", '8n')
        break;
        case 'C':
        synth.triggerAttackRelease("F3", '8n')
        break;
        case 'D':
        synth.triggerAttackRelease("G3", '8n')
        break;
        case 'E':
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

