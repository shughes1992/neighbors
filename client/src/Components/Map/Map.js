import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import classes from './Map.css';

import mapStyles from './mapStyles.json';

<<<<<<< HEAD
const style = {
    // width: '100%',
    // height: '40%'
  }

export class MapContainer extends React.Component  {
=======
export class MapContainer extends Component  {
>>>>>>> 667e12985a99efd451ca2b7c71bbf824f2e4113c
  render() {
    let pathCoords;
    if (this.props.hoodCoords){
      pathCoords = this.props.hoodCoords.map((coordSet) => (
        {lat: coordSet[1], lng: coordSet[0]}
      ))
    }
    // we want to offeset the map a little bit so the outlined neighborhood
    // fits nicely next to the chatbox
    const offSetLat = this.props.lat + .004;
    const offSetLng = this.props.lng - .008;
    return (
<<<<<<< HEAD
      <div className="Container">
      <div className="wrapper">
    
=======
>>>>>>> 667e12985a99efd451ca2b7c71bbf824f2e4113c
        <Map
          id="map"
          google={this.props.google}
          className={classes.MapContainer}
          initialCenter={{lat: offSetLat - .0001,lng: offSetLng}}
          zoom={15}
          styles={mapStyles}
          onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
            position={{lat: this.props.lat, lng: this.props.lng}}
            name={'Current location'} />

<<<<<<< HEAD
      </Map>

          </div>
      </div>
=======
          <Polyline
            path={pathCoords}
            strokeColor='#F46242'
            strokeOpacity={0.8}
            strokeWeight={6}
          />

        </Map>
>>>>>>> 667e12985a99efd451ca2b7c71bbf824f2e4113c
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBXYH0-ocvoZnzu1HrgZaBJQ1apvBclUt0')
})(MapContainer)
