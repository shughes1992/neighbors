import React, { Component } from 'react';
import classes from './ChatRoom.css';
import ChatBox from './ChatBox/ChatBox';
import MapContainer from '../../Components/Map/Map'

// <div className{classes.SomeClassName}>

class ChatRoom extends Component {

  render() {
    console.log(this.props.chatHistory)
    return (
      <div>
        <ChatBox chatHistory={this.props.chatHistory} activeUser={this.props.activeUser} />
        <MapContainer lat={this.props.lat} lng={this.props.lng} />
      </div>
    )
  }

}

export default ChatRoom;
