import React, { Component } from 'react';
import classes from './ChatRoom.css';
import ChatBox from './ChatBox/ChatBox';
import MapContainer from '../../components/Map/Map'

// <div className{classes.SomeClassName}>

class ChatRoom extends Component {

  render() {
    console.log(this.props.chatHistory)
    return (
      <div className ="container">
        <ChatBox chatHistory={this.props.chatHistory}  />
        <br />
        <br />
        <MapContainer lat={this.props.lat} lng={this.props.lng} />
      </div>
     
    )
  }

}

export default ChatRoom;
