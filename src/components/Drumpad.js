import React, {Component} from 'react';
import Tone from 'tone';
import { grey } from 'ansi-colors';

class Drumpad extends Component {
  constructor(props){
    super(props)
    this.state = {isToggleOn: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));;
  }

  playSound(){
    const synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease("C2", '8n')
  }

  render() {
    return (
      <div className="pad" onClick={this.handleClick}>
        {setInterval(this.state.isToggleOn ? 'ON' : 'OFF', 1000)}
        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
        {this.playSound()}
      </div>
    );
  }
} 

export default Drumpad