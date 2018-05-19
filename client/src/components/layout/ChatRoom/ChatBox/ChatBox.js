import React, { Component } from 'react';
import classes from './ChatBox.css';
import Button from '../../../UI/Button/Button';
class ChatBox extends Component {
  state = {
    chatHistory: [],
    message: ''
  }
  componentWillMount() {
    this.setState({
      chatHistory: this.props.chatHistory
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
    let newMessage = {user: this.props.activeUser, message: this.state.message}
    updatedChatHistory.push(newMessage)
    this.setState({
      message: '',
      chatHistory: updatedChatHistory
    })
  }

  render() {
    // use the map method to turn each message in the chat history into a jsx element
    const messages = this.state.chatHistory.map((chatItem, index) => {
      return (
        <div key={index}>
          <div>{chatItem.user}: <span>{chatItem.message}</span></div>
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
