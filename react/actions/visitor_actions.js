import * as VisitorsAJAX from '../ajax/visitors_ajax';

export const RECEIVE_VISITOR = 'RECEIVE_VISITOR';
export const RECEIVE_VISITOR_ERRORS = 'RECEIVE_VISITOR_ERRORS';
export const REMOVE_ALL_VISITOR_ERRORS = 'REMOVE_ALL_VISITOR_ERRORS';

const receiveVisitor = (visitor) => ({
  type: RECEIVE_VISITOR,
  visitor: visitor
});

const receiveErrors = (errors) => ({
  type: RECEIVE_VISITOR_ERRORS,
  errors: errors
});

const removeAllVisitorErrors = () => ({
  type: REMOVE_ALL_VISITOR_ERRORS
})

export const requestToCreateVisitor = (visitorData) => (dispatch) => VisitorsAJAX.postVisitor(visitorData)
  .then(visitor => dispatch(receiveVisitor(visitor)),
    err => (dispatch(receiveErrors(err.responseJSON))));

export const clearVisitorErrors = () => (dispatch) => dispatch(removeAllVisitorErrors());
