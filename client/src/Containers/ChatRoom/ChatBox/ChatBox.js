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
    console.log(this.state.chatHistory)
    // use the map method to turn each message in the chat history into a jsx element
    const messages = this.state.chatHistory.map((chatItem, index) => {
      return (
        <div key={index}>
          <div className={classes.Message}><span className={classes.Username}>{chatItem.user}:</span> <span>{chatItem.text} </span></div>
        </div>
      )
    })

    return (
      <div className={classes.ChatBox}>
        <div className={classes.Window}>
          {messages}
        </div>
        <input className={classes.ChatInput} value={this.state.message} onChange={this.updateMessage}/>
        {/* the inner html here ("send") is passed to button as props.children
          we can render buttons with different names by passing it different children
          additionally we can render buttons with different behavior on click by
        passing different function in the "clicked" prop */}
        <Button clicked={this.submitMessage}>Send</Button>
      </div>
    )
  }

}

export default ChatBox;
