export const getAllLeaders = () => (
    $.ajax({
        url: 'api/leaders',
        method: 'GET'
    })
);

export const getLeader = (id) => (
    $.ajax({
        url: `api/leaders/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

