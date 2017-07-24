var access_token = null;

access_token = JSON.parse(localStorage.getItem('myapp-access-token'));
// console.log(access_token);
if(!access_token) {
  window.location.href = '/login';
} else {
  $(() => {
    $('#userNameFieldId').val(access_token.user.username);
    ajaxLoadingOff();
  });
}
