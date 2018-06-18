export const getAllCompanies = () => (
    $.ajax({
        url: 'json/companies',
        method: 'GET'
    })
);

export const getCompany = (id) => (
    $.ajax({
        url: `json/companies/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);
