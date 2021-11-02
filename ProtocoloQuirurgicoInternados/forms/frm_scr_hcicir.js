
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25E8C707-2353-42ED-AA34-1DA0E25B019D"}
 */
function onAction_frm_scr_hcicir(event) {
	globals.vFechaHcir=foundset.hcirfecha
	globals.vHoraHcir=foundset.hcirhora
	//application.closeAllWindows();
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00776DDB-13F1-44DB-A5E1-7AF7D8D12E82"}
 */
function onShow_frm_scr_hcicir(firstShow, event) {
	controller.focusFirstField()
	elements.hcirfecha.requestFocus()
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD269718-578E-4BC2-9719-A5CEC37E542D"}
 */
function onRecordSelection_frm_scr_hcicir(event) {
	globals.vFechaHcir=foundset.hcirfecha
	globals.vHoraHcir=foundset.hcirhora
	//application.closeAllWindows();
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
