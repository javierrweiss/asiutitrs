/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"46871F37-6F07-42B6-BE73-09289526A870"}
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
 * @properties={typeid:24,uuid:"7FF4E313-01BD-435B-B472-09807C2E8AB9"}
 */
function onShow_scroll_combo_med(firstShow, event) {
	controller.focusFirstField()
	elements.combnumero.requestFocus()
}
