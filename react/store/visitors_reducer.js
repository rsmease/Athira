import {
  RECEIVE_VISITOR,
  RECEIVE_VISITOR_ERRORS
} from '../actions/visitor_actions';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VISITOR:
      return _.merge({}, state, action.visitor);
    case RECEIVE_VISITOR_ERRORS:
      return {}
    default:
      return state;
  }
}
