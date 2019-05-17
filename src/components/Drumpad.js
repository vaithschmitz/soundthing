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
    // init fx
    const dist = new Tone.Distortion();
    const rev = new Tone.Freeverb();
    const del = new Tone.FeedbackDelay(0.5, 0.8);

    // init synth
    const synth = new Tone.DuoSynth();

    // turn down wet if fx not in use
    if(!this.props.isDist){
      dist.wet.value = 0
    }
    if(!this.props.isDelay){
      del.wet.value = 0
    }
    if(!this.props.isRev){
      rev.wet.value = 0
    }

    synth.chain(dist, del, rev, Tone.Master)
    

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