import React, {Component} from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDist: false,
      isRev: false,
      isDelay: false
    }

    this.handleDist = this.handleDist.bind(this)
    this.handleRev = this.handleRev.bind(this)
    this.handleDelay = this.handleDelay.bind(this)
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



  render() {

    const pads = [];
    let notes = ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4'];
    for(let i = 0; i< 16; i++){
      pads.push(<Drumpad note = {notes[i]} key={notes[i]} isDist = {this.state.isDist} isRev = {this.state.isRev} isDelay = {this.state.isDelay}/>)
    }



    return ( 
      <div className = 'App'>
      <div className="Pads"> 
        {pads}
      </div>
      <div className = 'Control'>
      <button className= {this.state.isDist ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleDist()}}>Distortion</button>
      <button className= {this.state.isRev ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleRev()}}>Reverb</button>
      <button className= {this.state.isDelay ? 'btnon' : 'btnoff'}  onClick={(e) => {this.handleDelay()}}>Delay</button>
      </div>
      </div>
    );
  }
  }


export default App;
