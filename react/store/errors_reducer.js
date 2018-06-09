import {
  RECEIVE_VISITOR_ERRORS
} from '../actions/visitor_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VISITOR_ERRORS:
      return _.merge({}, state, { visitors: action.errors });
    default:
      return state;
  }
}
