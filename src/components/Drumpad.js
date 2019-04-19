import React, {Component} from 'react';
import Tone from 'tone';

class Drumpad extends Component {
  constructor(props){
    super(props)

    this.playSound = this.playSound.bind(this);
  }

  playSound(){
    const synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease("C2", '8n')
  }

  render() {
    return (
      <div 
        className="pad" 
        onClick={(e) => {this.playSound()}}
        style={{
          backgroundColor: 'blue',
          width: '15vw',
          color: 'white',
          textAlign: 'center',
          borderRadius: '10%',
        }}
        >
        CLICK
      </div>
    );
  }
} 

export default Drumpad