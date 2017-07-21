var access_token = null;

access_token = JSON.parse(localStorage.getItem('myapp-access-token'));
// console.log(access_token);
if(!access_token) {
  window.location.href = '/login';
} else {
  console.log('username: ', access_token.user.username);
  $(() => {
    $('#userNameFieldId').text(access_token.user.username);
  });
}
