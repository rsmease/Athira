//CSRF token needed for Rails security
const token = $('meta[name="csrf-token"]').attr('content');

export const postVisitor = (visitor) => (
  $.ajax({
    url: 'json/visitors',
    method: 'POST',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-CSRF-Token', token)
    },
    data: { visitor }
  })
);
