$(()=>{
  console.log('logout.js loaded');
  $('#logoutBtnId').on('click', (e) => {
    localStorage.removeItem('myapp-access-token');
    window.location.href = '/login';
  });
});
