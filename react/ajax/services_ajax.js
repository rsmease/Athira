export const getAllServices = () => (
    $.ajax({
        url: 'json/services',
        method: 'GET'
    })
);

export const getService = (id) => (
    $.ajax({
        url: `json/services/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);
