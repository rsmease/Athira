export const getAllReviews = () => (
    $.ajax({
        url: 'admin/reviews',
        method: 'GET'
    })
);

export const getReview = (id) => (
    $.ajax({
        url: `admin/reviews/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postReview = (reviewData) => (
    $.ajax({
        url: `admin/reviews`,
        method: 'POST',
        data: {
            review: reviewData
        }
    })
);

export const patchReview = (reviewData) => (
    $.ajax({
        url: `admin/reviews/${reviewData.id}`,
        method: 'PATCH',
        data: {
            review: reviewData
        }
    })
);

export const deleteReview = (id) => (
    $.ajax({
        url: `admin/reviews/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);