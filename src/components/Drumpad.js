import React, {Component} from 'react';
import Tone from 'tone';
import './Drumpad.css'

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlayed: false,
    }
    this.state.notes = {
      w: 'C2', e : 'D2', r : 'E2', t: 'F2',
      y: 'G2', u: 'A2', i: 'B2', o: 'C3', 
      s: 'D3', d: 'E3', f: 'F3', g: 'G3',
      h: 'A3', j: 'B3', k: 'C4', l : 'D4'
    }
    this.playSound = this.playSound.bind(this);
  }


  playSound(e){
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

    

    this.props.isKeyboard ? synth.triggerAttackRelease(this.state.notes[e], `${this.props.nlength}n`) : 
      synth.triggerAttackRelease(this.props.note, `${this.props.nlength}n`);    
      this.setState({
        isPlayed : !this.state.isPlayed
      })
  }


  render() {
    return (
      <div tabIndex={1}
        className = {this.props.isKeyboard ? 'pad' : (this.state.isPlayed ? 'pad2' : 'pad')} 
        onClick={(e) => {this.playSound()}}
        onKeyDown={(e) => {this.playSound(e.key)}}
        >
      <h3>{this.props.keyboard.toUpperCase()}</h3>
      </div>
     
    );
  }
} 

export default Drumpad