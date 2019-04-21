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
    const dist = new Tone.Distortion().toMaster();
    const synth = new Tone.DuoSynth().toMaster();
    if(this.props.isDist === true){
      synth.connect(dist)
    }
 
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
        <h1> {this.props.isDist}</h1>
      </div>
     
    );
  }
} 

export default Drumpad