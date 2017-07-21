$(()=>{
  console.log('logout.js loaded');
  $('#logoutBtnId').on('click', (e) => {
    localStorage.removeItem('myapp-access-token');
    window.location.href = '/login';
  });

  if(access_token) {
    setInterval(() => {
      let current_time = Date().toString();
      $('#timeFieldId').text(current_time);
    }, 1000);
  }
});
