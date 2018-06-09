export const postVisitor = (visitor) => (
  $.ajax({
    url: 'admin/visitors',
    method: 'POST',
    data: { visitor }
  })
);
