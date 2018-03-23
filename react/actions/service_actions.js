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

export const fetchService = (id) => (dispatch) => ServicesAJAX.fetchService(id)
    .then(fetchedService => dispatch(receiveService(fetchedService)));

export const fetchAllServices = () => (dispatch) => ServicesAJAX.fetchAllServices()
    .then(fetchedServices => dispatch(receiveAllServices(fetchedServices)));