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
