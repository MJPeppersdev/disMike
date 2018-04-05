import ChannelShow from './channel_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, fetchAChannel, deleteChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const currentServer = state.session.currentServer || {};
  const channels = state.entities.channels || {};
  const currentUser = state.session.currentUser || {};
  const currentChannel = state.entities.channels[ownProps.match.params.channelId] || {};
  const channelIds = currentServer.channel_ids || [];
  const currentUserId = currentUser.id || "";

//I have the channel ids and I'm going to transform them into objects


// channel_item_ids: [4,2,3]
// channel_item_ids: [{id: 4, name: general}, {id: 2, name: sadf}]

  return ({
    currentServerName: currentServer.name || "",
    currentServerOwnerId: currentServer.owner_id || "",
    currentUserId,
    currentServer,
    currentServerId: currentServer.id || "",
    channelIds,
    channels,
    currentUser,

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    createForm: () => dispatch(openModal('createChannel')),
    updateForm: () => dispatch(openModal('updateChannel')),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
