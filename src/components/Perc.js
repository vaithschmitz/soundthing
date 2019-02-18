import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Perc extends Component {

    drumStyle= ()=>{
      
        return{
            // #394053 color scheme for elements left to right
            // #4E4A59
            // #6E6362
            // #839073
            // #7CAE7A
            justifyContent: 'center',
            background: 'lightgrey',
            margin: '10px',
            padding: '10px',
            borderBottom: '1px, #ccc dotted', 
            textAlign: 'center'

        }
    }
  render() {
      const { id, type } = this.props.drum;
      return (
    <div style={this.drumStyle()} onClick={this.props.hitDrum.bind
    (this, type)} >
    <h3>
        {this.props.drum.type} 
    </h3>
    </div>
      );
  }
}

// PropTypes
Perc.propTypes = {
    drum: PropTypes.object.isRequired
    }

export default Perc
