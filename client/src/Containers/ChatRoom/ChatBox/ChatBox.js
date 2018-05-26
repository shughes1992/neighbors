import React, { Component } from 'react';
import classes from './ChatBox.css';
import Login from '../../Login/Login'
import Button from '../../../Components/UI/Button/Button';
import api from '../../../utils/apiRequests';

class ChatBox extends Component {
  state = {
    chatHistory: this.props.chatHistory,
    message: '',
    activeUser: ''
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
    let updatedChatHistory = [...this.state.chatHistory];
    let newMessage = {user: this.props.activeUser, text: this.state.message}
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
          <div className={classes.WindowHeader}>{this.props.location} Chat</div>
          {/* {messages} */}
        </div>
        <div id="chatControls" class={classes.ChatControls}>
          <input className={classes.ChatInput} value={this.state.message} onChange={this.updateMessage}/>
          <Button clicked={this.submitMessage}>Send</Button>
        </div>
      </div>
    )
  }

}

export default ChatBox;
