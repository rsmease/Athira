import * as VisitorsAJAX from '../ajax/visitors_ajax';

export const RECEIVE_VISITOR = 'RECEIVE_VISITOR';
export const RECEIVE_VISITOR_ERRORS = 'RECEIVE_VISITOR_ERRORS';

const receiveVisitor = (visitor) => ({
  type: RECEIVE_VISITOR,
  visitor: visitor
});

const receiveErrors = (errors) => ({
  type: RECEIVE_VISITOR_ERRORS,
  errors: errors
});

export const requestToCreateVisitor = (visitorData) => (dispatch) => VisitorsAJAX.postVisitor(visitorData)
  .then(visitor => dispatch(receiveVisitor(visitor)),
    err => (dispatch(receiveErrors(err.responseJSON))));
