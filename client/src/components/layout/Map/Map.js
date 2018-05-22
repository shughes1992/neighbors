import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
    width: '100%',
    height: '40%'
  }

export class MapContainer extends React.Component  {
  render() {
    return (

        
        <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 40.854885,
          lng: 41.854885
        }}
        zoom={9}
        onClick={this.onMapClicked}
      >
            {/* <Map google={this.props.google} zoom={14}> */}

 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
              
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBXYH0-ocvoZnzu1HrgZaBJQ1apvBclUt0')
})(MapContainer)