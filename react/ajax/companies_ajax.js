export const getAllCompanies = () => (
    $.ajax({
        url: 'admin/companies',
        method: 'GET'
    })
);

export const getCompany = (id) => (
    $.ajax({
        url: `admin/companies/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postCompany = (companyData) => (
    $.ajax({
        url: `admin/companies`,
        method: 'POST',
        data: {
            company: companyData
        }
    })
);

export const patchCompany = (companyData) => (
    $.ajax({
        url: `admin/companies/${companyData.id}`,
        method: 'PATCH',
        data: {
            company: companyData
        }
    })
);

export const deleteCompany = (id) => (
    $.ajax({
        url: `admin/companies/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);