import React, { Component } from 'react';
import classes from './ChatBox.css';
import Button from '../../../Components/UI/Button/Button';
import api from '../../../utils/apiRequests';
import WindowHeader from '../../../Components/UI/WindowHeader/WindowHeader';
class ChatBox extends Component {
  state = {
    chatHistory: [],
    message: '',
  }

  componentDidMount() {
    api.getMessages(this.props.locationId)
    .then(response => {
      console.log("chat history: ", chatHistory)
      let chatHistory = response.map(message => (
        {user: message.User.name, text: message.text}
      ))
      this.setState({
        chatHistory,
      })
    })
  }

  updateMessage = (event) => {
    let updatedMessage = event.target.value;
    this.setState({
      message: updatedMessage
    })
  }

  submitMessage = () => {
    let updatedChatHistory = [];
    if (this.state.chatHistory) {
      updatedChatHistory = [...this.state.chatHistory];
    }
    const newMessage = {text: this.state.message, UserId: this.props.userId, LocationId: this.props.locationId}
    const displayMessage = {text: this.state.message, user: this.props.user}
    updatedChatHistory.push(displayMessage)
    // post to db
    api.postMessage(newMessage)
    .then(response => {
      this.setState({
        message: '',
        chatHistory: updatedChatHistory
      })
    })
  }

  render() {
    let messages = []
    if (this.state.chatHistory) {
      messages = this.state.chatHistory.map(message => {
        return (
          <div className={classes.Message}>
            <span className={classes.Username}>{message.user}: </span>
            <span className={classes.MessageText}>{message.text}</span>
          </div>
        )
      })
    }
    return (
      <div className={classes.ChatBox}>
        <div className={classes.Window}>
          <WindowHeader >{this.props.location} Chat</WindowHeader>
          {messages}
        </div>
        <div id="chatControls" className={classes.ChatControls}>
          <input className={classes.ChatInput} value={this.state.message} onChange={this.updateMessage}/>
          <Button clicked={this.submitMessage}>Send</Button>
        </div>
      </div>
    )
  }

}


export default ChatBox;
