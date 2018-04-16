import React, { Component } from 'react';
import PropTypes from 'prop-types';
import place from 'places.js';

class Places extends Component {
    
  componentDidMount() {
        
    let options = {
      container: this.autoCompletePlace,
      language: this.props.language,
      useDeviceLocation: this.props.useDeviceLocation,
            
    };
        
    const optionnalPropsKeys = ['type', 'countries', 'aroundLatLng', 'aroundRadius', 'templates', 'appId', 'apiKey', 'apiKey'];
        
    for (let optionnalPropKey of optionnalPropsKeys) {
      if (this.props[optionnalPropKey]) { options[optionnalPropKey] = this.props[optionnalPropKey];}
    }
        
    const autocomplete = place(options);
    autocomplete.on('change', this.props.onChange);
    autocomplete.on('suggestions', this.props.onSuggestions);
  }
    
  render() {
    return (
      <input
        disabled={this.props.disabled}
        ref={(input) => {this.autoCompletePlace = input;}}
      />
    );
  }
}

Places.propTypes = {
  apiKey: PropTypes.string,
  appId: PropTypes.string,
  aroundLatLng: PropTypes.string,
  aroundRadius: PropTypes.number,
  countries: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  language: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSuggestions: PropTypes.func.isRequired,
  templates: PropTypes.object,
  type: PropTypes.oneOf(['city', 'country', 'address', 'busStop', 'trainStation', 'townhall', 'airport']),
  useDeviceLocation: PropTypes.bool,
};

Places.defaultProps = {
  disabled: false,
  language: navigator.language,
  useDeviceLocation: false,
  onChange: (query, rawAnswer, suggestion, suggestionIndex) => console.log(query, rawAnswer, suggestion, suggestionIndex),
  onSuggestions: (query, rawAnswer, suggestions) => console.log(query, rawAnswer, suggestions), 
};

export default Places;