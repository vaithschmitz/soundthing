import React, {Component} from 'react';
import Tone from 'tone';
import './Drumpad.css'

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.playSound = this.playSound.bind(this);
  }

  playSound(props){
    const vib = new Tone.Vibrato().toMaster();
    const pingPong = new Tone.PingPongDelay("6n", 0.3).toMaster();
    const synth = new Tone.Synth([{
      oscillator  : {
      type  : 'sawtooth'
      },}]).connect(pingPong).connect(vib);
      synth.triggerAttackRelease(this.props.note, '4n')
  }
  
  render() {
    return (
      <div
        className='pad' 
        onClick={(e) => {this.playSound()}}>
        <h1> {this.props.note} </h1>
      </div>
     
    );
  }
} 

export default Drumpad