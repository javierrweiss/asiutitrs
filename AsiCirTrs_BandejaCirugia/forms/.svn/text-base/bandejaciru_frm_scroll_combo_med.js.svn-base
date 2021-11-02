/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C14C551A-3D7E-4854-81E6-7C7B87893DEF"}
 */
function onAction_Scroll_combo_med(event) {
	globals.bandejaciru_vCodigoCombo=foundset.combnumero
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
 * @properties={typeid:24,uuid:"510E54E7-B49B-4DAF-9668-2F98B381DA8E"}
 */
function onShow_scroll_combo_med(firstShow, event) {
	controller.focusFirstField()
	elements.combnumero.requestFocus()
}
