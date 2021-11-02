/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D51A21D-25E1-4863-AE84-7A9D96CF2D81"}
 */
function onAction_CodigoScroll(event) {
	globals.vCodigoMed=foundset.art_codigo
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
 * @properties={typeid:24,uuid:"9084D5C8-3C29-4A42-8266-252865C9A427"}
 */
function onShow_scroll_medicamentos(firstShow, event) {
	controller.focusFirstField()
	elements.art_codigo.requestFocus()
}
