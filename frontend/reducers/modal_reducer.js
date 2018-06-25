import { merge } from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { OPEN_DROPDOWN } from '../actions/dropdown_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';

export default function modalReducer(state = {}, action) {

  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return {};
    case OPEN_DROPDOWN:
      return {};
    case RECEIVE_CURRENT_USER_SESSION:
      return {};
    default:
      return state;
  }
}
