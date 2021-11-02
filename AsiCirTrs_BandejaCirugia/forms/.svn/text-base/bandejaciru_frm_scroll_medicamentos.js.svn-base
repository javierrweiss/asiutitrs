/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0DD40DB1-6A81-486B-83D7-D7226486DDA8"}
 */
function onAction_CodigoScroll(event) {
	globals.bandejaciru_vCodigoMed=foundset.art_codigo
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
 * @properties={typeid:24,uuid:"F5DA2160-0DD7-4996-8007-8302C9745120"}
 */
function onShow_scroll_medicamentos(firstShow, event) {
	controller.focusFirstField()
	elements.art_codigo.requestFocus()
}
