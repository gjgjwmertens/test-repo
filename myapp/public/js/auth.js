access_token = JSON.parse(localStorage.getItem('myapp-access-token'));
// console.log(access_token);
if(!access_token) {
  window.location.href = '/login';
  throw 'Authorization error: not loged in!!';
} else {
  $(() => {
    $('#userNameFieldId').val(access_token.user.username);
    ajaxLoadingOff();
  });
}
