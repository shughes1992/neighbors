import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import classes from './Map.css';
import mapStyles from './mapStyles.json'

export class MapContainer extends Component  {
  render() {
    return (
        <Map
          id="map"
          google={this.props.google}
          className={classes.MapContainer}
          initialCenter=
          {{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          zoom={15}
          styles={mapStyles}
          onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBXYH0-ocvoZnzu1HrgZaBJQ1apvBclUt0')
})(MapContainer)
