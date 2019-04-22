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
    this.handleKeys = this.handleKeys.bind(this)
  }

  playSound(props){
    const dist = new Tone.Distortion().toMaster();
    const rev = new Tone.Freeverb().toMaster();
    const del = new Tone.FeedbackDelay({
        delayTime: 0.5
    }).toMaster();
    const synth = new Tone.DuoSynth().toMaster();
    
    if(this.props.isDelay === true){
      synth.connect(del)
    }
    if(this.props.isDist === true){
      synth.connect(dist)
    }
    if(this.props.isRev === true){
      synth.connect(rev)
    }

    synth.triggerAttackRelease(this.props.note, '8n')
    this.setState({
      isPlayed : !this.state.isPlayed
    })
  }

  handleKeys(props){
    console.log(this.props.keyboard)

  }



  render() {
    return (
      <div tabIndex={1}
        className={this.state.isPlayed ? 'pad2' : 'pad'} 
        onClick={(e) => {this.playSound(); this.handleKeys()}}
        onKeyDown={(e) => {this.playSound(this.props.keyboard == e)}}>
      </div>
     
    );
  }
} 

export default Drumpad