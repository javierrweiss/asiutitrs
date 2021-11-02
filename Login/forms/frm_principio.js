/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB98E512-24ED-4490-A95C-1C24D45369F7"}
 */
function onShow_principio(firstShow, event) {
	var $win = application.createWindow('LOGIN',JSWindow.MODAL_DIALOG)
	$win.undecorated = true
	$win.setSize(440,240)
	forms.frm_login.controller.show($win)
}
