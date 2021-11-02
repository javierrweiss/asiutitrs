/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C3EAE49-883D-4AB0-9EA2-868E73CFE794"}
 */
function onAction_Scroll_combo_med(event) {
	globals.vCodigoCombo=foundset.combnumero
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	//application.closeAllWindows()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DACA0D4-AD9C-4547-A603-DB87BE8EAE15"}
 */
function onShow_scroll_combo_med(firstShow, event) {
	controller.focusFirstField()
	elements.combnumero.requestFocus()
}
