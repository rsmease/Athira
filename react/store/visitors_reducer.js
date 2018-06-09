import {
  RECEIVE_VISITOR
} from '../actions/visitor_actions';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VISITOR:
      return _.merge({}, state, action.visitor);
    default:
      return state;
  }
}
