import React, { Component } from 'react';
import classes from './ChatRoom.css';
import ChatBox from './ChatBox/ChatBox';
import MapContainer from '../../Components/Map/Map';
import { connect } from 'react-redux';


class ChatRoom extends Component {

  render() {
    console.log(this.props.location)
    return (
      <div>
        <ChatBox location={this.props.location}/>
        <MapContainer
          location={this.props.location}
          lat={this.props.lat}
          lng={this.props.lng}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.loginReducer.location,
  lat: state.loginReducer.lat,
  lng: state.loginReducer.lng,
  username: state.loginReducer.username
});

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
