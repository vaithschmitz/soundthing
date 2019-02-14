import React, { Component } from 'react';
// import { LoopHandler } from './utils/Audiohelpers.js';
import Drums from "./components/Drums.js";
import Tone from 'tone';
import {Chord, PcSet} from 'tonal';


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
    const synth = new Tone.PolySynth(4, Tone.Synth);
    synth.toMaster();
 
    const notes = [
      // Chord.notes("C2add9"), Chord.notes("D2m7"), Chord.notes("C2maj7"),
      Chord.notes("C3add9"), Chord.notes("D3m7"), Chord.notes('E3m7'), Chord.notes("C3maj7"),
      // Chord.notes("C4add9"), Chord.notes("D4m7"), Chord.notes("C4maj7"),
    ]
    
    function loop(){
      let loopIndex = 0;
      Tone.Transport.scheduleRepeat(time => {
      repeat(time)
    }, '16n');

    function repeat(time){
      let note = notes[loopIndex % notes.length];
      synth.triggerAttackRelease(note, '16n', time);
      loopIndex++ ;
      console.log(loopIndex);
    }

    Tone.Transport.start();
    setTimeout(() => {
      Tone.Transport.stop();
    }, 5000)
  }
    
    switch (type){
      case 'Arp':
        loop();
        break;
        case 'A':
        break;
        case 'B':
        break;
        case 'C':
        break;
        case 'D':
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

