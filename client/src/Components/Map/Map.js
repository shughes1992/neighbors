import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import classes from './Map.css';


const style = {
    width: '100%',
    height: '40%'
  }

export class MapContainer extends React.Component  {
  render() {
    return (
      <div style={{ height: '30vh', width: '100%' }}>
        <Map
          google={this.props.google}
          style={style}
          initialCenter=
          {{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          zoom={15}
          onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

      </Map>


      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBXYH0-ocvoZnzu1HrgZaBJQ1apvBclUt0')
})(MapContainer)
