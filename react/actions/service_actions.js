import * as ServicesAJAX from '../ajax/services_ajax';

export const RECEIVE_SERVICE = 'RECEIVE_SERVICE';
export const RECEIVE_ALL_SERVICES = 'RECEIVE_ALL_SERVICES';

const receiveService = (service) => ({
    type: RECEIVE_SERVICE,
    service
});

const receiveAllServices = (services) => ({
    type: RECEIVE_ALL_SERVICES,
    services
});

export const getService = (id) => (dispatch) => ServicesAJAX.getService(id)
    .then(service => dispatch(receiveService(service)));

export const getAllServices = () => (dispatch) => ServicesAJAX.getAllServices()
    .then(services => dispatch(receiveAllServices(services)));