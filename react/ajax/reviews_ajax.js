export const getAllReviews = () => (
    $.ajax({
        url: 'json/reviews',
        method: 'GET'
    })
);

export const getReview = (id) => (
    $.ajax({
        url: `json/reviews/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);
