export const getAllImageCarousels = () => (
    $.ajax({
        url: 'json/image_carousels',
        method: 'GET'
    })
);

export const getImageCarousel = (id) => (
    $.ajax({
        url: `json/image_carousels/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);
