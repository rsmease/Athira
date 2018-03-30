export const getAllLeaders = () => (
    $.ajax({
        url: 'admin/leaders',
        method: 'GET'
    })
);

export const getLeader = (id) => (
    $.ajax({
        url: `admin/leaders/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postLeader = (leaderData) => (
    $.ajax({
        url: `admin/leaders`,
        method: 'POST',
        data: {
            leader: leaderData
        }
    })
);

export const patchLeader = (leaderData) => (
    $.ajax({
        url: `admin/leaders/${leaderData.id}`,
        method: 'PATCH',
        data: {
            leader: leaderData
        }
    })
);

export const deleteLeader = (id) => (
    $.ajax({
        url: `admin/leaders/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);