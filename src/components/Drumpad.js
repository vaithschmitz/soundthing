import React, {Component} from 'react';
import Tone from 'tone';
import './Drumpad.css'

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlayed: false
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(props){
    const synth = new Tone.PluckSynth().toMaster();
      synth.triggerAttackRelease(this.props.note, '8n')
    this.setState({
      isPlayed : !this.state.isPlayed
    })
  }


  
  render() {
    return (
      <div
        className={this.state.isPlayed ? 'pad2' : 'pad'} 
        onClick={(e) => {this.playSound()}}>
      </div>
     
    );
  }
} 

export default Drumpad