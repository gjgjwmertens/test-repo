$(()=>{
  console.log('logout.js loaded');
  $('#logoutBtnId').on('click', (e) => {
    localStorage.removeItem('myapp-access-token');
    window.location.href = '/login';
  });
});

function ajaxLoadingOn() {
  $('#ajaxLoadingImgId')
    .css('visibility', 'visible');
  $('#ajaxLoadingBtnId')
    .toggleClass('btn-outline-primary btn-outline-success');
};

function ajaxLoadingOff() {
  $('#ajaxLoadingImgId')
    .css('visibility', 'hidden');
  $('#ajaxLoadingBtnId')
    .toggleClass('btn-outline-primary btn-outline-success');
};
