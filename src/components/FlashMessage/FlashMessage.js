import { Message } from "semantic-ui-react";
import React from "react";

class FlashMessage extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.props.deleteFlashMessage(this.props.id);
  }

  render(){
    const { text } = this.props;
    return (
      <Message size="large" positive onDismiss={this.onClick} color="teal">  
        <Message.Header> { text } </Message.Header> 
      </Message>
    );
  }
}

export default FlashMessage;
