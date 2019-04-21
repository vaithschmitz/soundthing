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
    const rev = new Tone.Freeverb().toMaster();
    const del = new Tone.FeedbackDelay({
        delayTime: 0.5
    }).toMaster();
    const synth = new Tone.DuoSynth().toMaster();

    if(this.props.isDist === true){
      synth.connect(dist)
    }
    if(this.props.isRev === true){
      synth.connect(rev)
    }
    if(this.props.isDelay === true){
      synth.connect(del)
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
        <h2> {this.props.isDist ? 'Dist' : ""}</h2>
        <h2> {this.props.isRev ? 'Rev' : ""}</h2>
        <h2> {this.props.isDelay ? 'Delay' : ""}</h2>
      </div>
     
    );
  }
} 

export default Drumpad