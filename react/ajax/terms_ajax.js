export const getAllTerms = () => (
    $.ajax({
        url: 'json/terms',
        method: 'GET'
    })
);

export const getTerm = (id) => (
    $.ajax({
        url: `json/terms/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);