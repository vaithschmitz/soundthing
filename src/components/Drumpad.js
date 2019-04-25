import React, {Component} from 'react';
import Tone from 'tone';
import './Drumpad.css'

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlayed: false,
      keyPressed: ''
    }
    this.state.notes = {
      w: 'C2', e : 'D2', r : 'E2', t: 'F2',
      y: 'G2', u: 'A2', i: 'B2', o: 'C3', 
      s: 'D3', d: 'E3', f: 'F3', g: 'G3',
      h: 'A3', j: 'B3', k: 'C4', l : 'D4'
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeys = this.handleKeys.bind(this);  
  }

  handleKeys(e){
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
    synth.triggerAttackRelease(this.state.notes[e], '8n')


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

  



  render() {
    return (
      <div tabIndex={1}
        className={this.state.isPlayed ? 'pad2' : 'pad'} 
        // onClick={(e) => {this.playSound()}}
        onKeyDown={(e) => {this.handleKeys(e.key)}}
        >
      <h3>{this.props.keyboard}</h3>
      </div>
     
    );
  }
} 

export default Drumpad