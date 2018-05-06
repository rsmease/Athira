export const getAllImageCarousels = () => (
    $.ajax({
        url: 'admin/image_carousels',
        method: 'GET'
    })
);

export const getImageCarousel = (id) => (
    $.ajax({
        url: `admin/image_carousels/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postImageCarousel = (imageCarouselData) => (
    $.ajax({
        url: `admin/image_carousels`,
        method: 'POST',
        data: {
            image_carousel: imageCarouselData
        }
    })
);

export const patchImageCarousel = (imageCarouselData) => (
    $.ajax({
        url: `admin/image_carousels/${imageCarouselData.id}`,
        method: 'PATCH',
        data: {
            image_carousel: imageCarouselData
        }
    })
);

export const deleteImageCarousel = (id) => (
    $.ajax({
        url: `admin/image_carousels/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);