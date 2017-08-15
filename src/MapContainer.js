import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import Panel from './Panel';

const MapContainer = React.createClass({
  getInitialState: function() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  },

  onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  onInfoWindowClose: function() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  },

  onMapClicked: function(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  },

  render: function() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}>
        <Marker
          onClick={this.onMarkerClick}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
        <Marker
          onClick={this.onMarkerClick}
          name={'Dolores park'}
          position={{lat: 37.759703, lng: -122.428093}} />
        <Marker onClick={this.onMarkerClick}
                name={'Restaurant'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <Panel name={this.state.selectedPlace.name}/>
            </div>
        </InfoWindow>
      </Map>
    )
  }
});
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)