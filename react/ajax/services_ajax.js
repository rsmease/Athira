export const getAllServices = () => (
    $.ajax({
        url: 'admin/services',
        method: 'GET'
    })
);

export const getService = (id) => (
    $.ajax({
        url: `admin/services/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postService = (serviceData) => (
    $.ajax({
        url: `admin/services`,
        method: 'POST',
        data: {
            service: serviceData
        }
    })
);

export const patchService = (serviceData) => (
    $.ajax({
        url: `admin/services/${serviceData.id}`,
        method: 'PATCH',
        data: {
            service: serviceData
        }
    })
);

export const deleteService = (id) => (
    $.ajax({
        url: `admin/services/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);