import React, {Component} from 'react';
import Tone from 'tone';
import './Drumpad.css'

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.playSound = this.playSound.bind(this);
  }

  playSound(props){
    const synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(this.props.note, '8n')
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