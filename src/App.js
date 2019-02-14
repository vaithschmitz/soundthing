import React, { Component } from 'react';
import Drums from "./components/Drums.js";
import Tone from 'tone';
import {Chord, PcSet} from 'tonal';


class App extends Component {
  state={
   drums: [
      {
        id: 1, 
        type: "Kick"
      },
      {
        id: 2, 
        type: "Snare"
      },
      {
        id: 3, 
        type: "Clap"
      },
      {
        id: 3, 
        type: "HH"
      },
      {
        id: 4, 
        type: "Ride"
      },
      {
        id: 4, 
        type: "Play"
      }
    ]
  }
 
  hitDrum = (type) =>{
    const synth = new Tone.PolySynth(4, Tone.Synth);
    synth.toMaster();
 
    const notes = [
      Chord.notes("C3add9"), Chord.notes("D3m7"), Chord.notes("C3maj7")
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
      case 'Kick':
        loop();
        break;
        case 'Snare':
        break;
        case 'Clap':
        break;
        case 'HH':
        alert("HH")
        break;
        case 'Ride':
        alert("Ride")
        break;
        case 'Play':
        alert("Play")
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

