import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Perc from './Perc.js';

class Drums extends Component {
    render() {
        return this.props.drums.map((drum) => (
            <Perc key={drum.id} drum={drum} hitDrum = {this.props.hitDrum}/>
        ));
    }
}

// PropTypes
Drums.propTypes = {
drums: PropTypes.array.isRequired
}

export default Drums;

