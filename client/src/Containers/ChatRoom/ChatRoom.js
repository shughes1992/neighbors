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
        <MapContainer location={this.props.location}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  username: state.username
});

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
