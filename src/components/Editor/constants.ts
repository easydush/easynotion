export const textConfig = {
  height: 400,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media paste code help wordcount',
  ],
  toolbar: 'formatselect | bold italic backcolor | alignleft ' +
    'aligncenter alignright alignjustify | bullist numlist outdent ' +
    'indent | removeformat | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
};

export const tableConfig = {
  height: 400,
  menubar: 'table',
  plugins: [
    'table',
  ],
  toolbar: 'bold italic backcolor | table tabledelete | tableprops ' +
    'tablerowprops tablecellprops | tableinsertrowbefore ' +
    'tableinsertrowafter tabledeleterow | tableinsertcolbefore ' +
    'tableinsertcolafter tabledeletecol',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
};
