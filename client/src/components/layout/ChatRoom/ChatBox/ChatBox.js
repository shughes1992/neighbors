import React, { Component } from 'react';
import classes from 'ChatBox.css'
import Button from '../../UI/Button/Button'
class ChatBox extends Component {
  state = {
    chatHistory: []
    message: ''
  }

  componentDidReceiveProps() {
    this.setState({
      chatHistory: props.chatHistory
    })
  }

  updateMessage = (event) => {
    let message = event.target.value;

  }

  submitMessage = () => {
    let updatedChatHistory = [...this.state.chatHistory];

  }

  render() {

    return (
      <div className={classes.ChatBox}>
        <div className={classes.Window}>
          {this.state.chatHistory}
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
