export const postVisitor = (visitorData) => (
  $.ajax({
      url: `admin/visitors`,
      method: 'POST',
      data: {
          visitor: visitorData
      }
  })
);
