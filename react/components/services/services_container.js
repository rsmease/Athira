import {
    connect
} from 'react-redux';
import _ from 'lodash';

import ServicesIndex from './services_index';

import * as ServiceActions from '../../actions/service_actions';

const mapStateToProps = (state, ownProps) => ({
    services: _.values(state.services)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllServices: () => dispatch(ServiceActions.getAllServices())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesIndex);