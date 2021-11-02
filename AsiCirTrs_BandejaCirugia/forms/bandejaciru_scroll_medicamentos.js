/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AE91B6B-6E63-41CE-9EF6-F5DE80B07348"}
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
 * @properties={typeid:24,uuid:"33F5E08A-6368-40BA-9E8A-8660DCFDA650"}
 */
function onShow_scroll_medicamentos(firstShow, event) {
	controller.focusFirstField()
	elements.art_codigo.requestFocus()
}
