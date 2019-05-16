import React, {Component} from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isDist: false,
      isRev: false,
      isDelay: false, 
      isKeyboard: false, 
      nlength: 4
    }

    this.handleDist = this.handleDist.bind(this)
    this.handleRev = this.handleRev.bind(this)
    this.handleDelay = this.handleDelay.bind(this)
    this.handleControls = this.handleControls.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleDist(){
    this.setState({
      isDist: !this.state.isDist,
    })
  }

  handleRev(){
    this.setState({
      isRev: !this.state.isRev,
    })
  }

  handleDelay(){
    this.setState({
      isDelay: !this.state.isDelay,
    })
  }

  handleControls(){
    this.setState({
      isKeyboard: !this.state.isKeyboard,
    })
  }

  handleChange(e, value){
    this.setState({ nlength: e.target.value });
    console.log(this.state.nlength)
  };


  render() {

    const pads = [];
    let notes = ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4'];
    let keyboard = ['w','e','r','t','y','u','i','o','s','d','f','g','h','j','k','l'];
    for(let i = 0; i< 16; i++){
      pads.push(<Drumpad 
        note = {notes[i]} 
        nlength = {this.state.nlength}
        key={keyboard[i]}
        keyboard={keyboard[i]} 
        isDist = {this.state.isDist} 
        isRev = {this.state.isRev} 
        isDelay = {this.state.isDelay}
        isKeyboard = {this.state.isKeyboard}
        />)
    }



    return ( 
      <div className = 'App'>
        <div className="Pads"> 
          {pads}
        </div>
        <div className = 'Control'>
          <div className= {this.state.isDist ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleDist()}}>Distortion</div>
          <div className= {this.state.isRev ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleRev()}}>Reverb</div>
          <div className= {this.state.isDelay ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleDelay()}}>Delay</div>
          <div className= {this.state.isKeyboard ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleControls()}}>{this.state.isKeyboard ? 'Keyboard' : 'Click'}</div>
          <h5>{this.state.isKeyboard ? 'Click On Any Pad Then Use Your Keyboard To Play' : ''}</h5>
        </div>

      <div className = 'Mod'>
        Length: 1/{this.state.nlength}
        <input className= 'slider'
          type= 'range' 
          value={this.state.nlength}
          min={1}
          max={8}
          step={1}
          onChange={this.handleChange}
        />
      
      </div> 


      </div>
    );
  }
  }


export default App;
