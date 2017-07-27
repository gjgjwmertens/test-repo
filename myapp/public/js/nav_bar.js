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

function showAlert(msg, alertType = 'danger') {
  // options: success, info, warning, danger
  let alertId = guidGenerator();

  $('#templateAlertMsgContainerId').html(msg);
  $('#alertContainerId').append(
    $('#templateAlertContainerId').html()
      .replace('templateAlertMsgContainerId',
        alertType + 'AllertMsgContainerId')
      .replace('templateAlertId', alertId)
  );
  $('#' + alertId).addClass('alert-' + alertType);
};

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
