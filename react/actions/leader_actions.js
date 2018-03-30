import * as LeadersAJAX from '../ajax/leaders_ajax';

export const RECEIVE_LEADER = 'RECEIVE_LEADER';
export const RECEIVE_ALL_LEADERS = 'RECEIVE_ALL_LEADERS';

const receiveLeader = (leader) => ({
    type: RECEIVE_LEADER,
    leader
});

const receiveAllLeaders = (leaders) => ({
    type: RECEIVE_ALL_LEADERS,
    leaders
});

export const getLeader = (id) => (dispatch) => LeadersAJAX.getLeader(id)
    .then(leader => dispatch(receiveLeader(leader)));

export const getAllLeaders = () => (dispatch) => LeadersAJAX.getAllLeaders()
    .then(leaders => dispatch(receiveAllLeaders(leaders)));