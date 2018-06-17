export const getAllLeaders = () => (
    $.ajax({
        url: 'json/leaders',
        method: 'GET'
    })
);

export const getLeader = (id) => (
    $.ajax({
        url: `json/leaders/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

