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

  componentWillMount() {
    api.getMessages(this.props.location)
    .then(chatHistory => {
      console.log("chat history: ", chatHistory)
      this.setState({
        chatHistory,
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    this.setState({
      chatHistory: nextProps.chatHistory,
      activeUser: nextProps.activeUser
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
    let newMessage = {user: this.props.activeUser, text: this.state.message, location: this.props.location}
    updatedChatHistory.push(newMessage)
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
    return (
      <div className={classes.ChatBox}>
        <div className={classes.Window}>
          <WindowHeader >{this.props.location} Chat</WindowHeader>
          {/* {messages} */}
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
