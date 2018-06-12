
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';



class MessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {body: '', messagable_id: this.props.channelId, messagable_type: this.props.messageType};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.props.fetchAChannel(this.props.match.params.channelId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.channelId !== this.props.channelId) {
      this.setState({messagable_id: newProps.channelId, messagable_type: newProps.messageType});
      // this.props.fetchAChannel(newProps.channelId)
    }
  }

  handleSubmit(e) {
      if (e.key === 'Enter') {
      const message = Object.assign({}, this.state);
      this.props.processForm(message);
      setTimeout(() => {
        this.setState({ body: "" });

      }, 0);


    }
  }


  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        channel_id: this.props.channelId
      });
    };
  }

  render() {

    return (
      <div className='message-form'>
        <form className='form-input' onKeyPress={this.handleSubmit}>
          <textarea type='text'
              id='textareaInput'
              className='message-input-field'
              onChange={this.handleInput('body')}
              value={this.state.body}
              placeholder={`Message #${this.props.currentChannelName}`}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);
