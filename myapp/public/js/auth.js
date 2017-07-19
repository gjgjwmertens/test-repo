var access_token = null;

$(
  function () {
    access_token = JSON.parse(localStorage.getItem('myapp-access-token'));
    console.log(access_token);
    if(!access_token) {
      window.location.href = '/login';
    }
  }
);
