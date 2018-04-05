import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {

  const iconButtons = (props.currentUserId === props.currentServerOwnerId) ?
    <div className='channel-controls'>
      <button className='fafaicons-container' onClick={() => props.fetchAChannel(props.id).then(() => props.updateForm()) }>
        <i className="fas fa-edit"></i>
      </button>
      <button className='fafaicons-container' onClick={() =>
          props.deleteChannel(props.id) }>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
   :
   <div></div>;

    if (props.id) {
    return (
      <li className="channel-item-container">
        <div className='channel-name-container'>
          <Link
            to={`/@me/${props.currentServerId}/${props.id}`}
            className='channel-link-item'>
            # {props.channel.name}
          </Link>
        </div>
        {iconButtons}
      </li>
    );
  }
};



export default withRouter(ChannelIndex);
