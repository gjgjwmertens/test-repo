var access_token = {token: 'Unauthorized'};

$(() => {
  $.ajaxSetup({
    headers : {
      'Authorization' : 'Bearer ' + access_token.token
    }
  });
});

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function handleError(err) {
  console.log('status: ' + err.status);
  switch(err.status) {
    case 401:
      console.log('statusText: ' + err.statusText);
      console.log('responseText: ' + err.responseText);
      localStorage.removeItem('myapp-access-token');
      window.location.href = '/login';
      break;
    default:
      throw err;
  }
}
