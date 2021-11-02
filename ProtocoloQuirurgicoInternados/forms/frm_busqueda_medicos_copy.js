/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69C93F45-79B7-4E04-8255-AF5DB2490E33"}
 */
function onAction_FIND(event) {
	globals.vLegajoAlfa=globals.vLegajoAlfa.toLocaleUpperCase()
	elements.tabless_personal.tabIndex = 1
	forms.frm_scroll_medicos.controller.focusFirstField()
	forms.frm_scroll_medicos.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"087B0923-3E1D-4071-9B93-CCD40E39E042"}
 */
function onShow_busqueda_Personal(firstShow, event) {
	globals.vLegajoAlfa=''
	elements.buscar.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D83B1FF0-E231-48FA-BB79-E3CBD622E952"}
 */
function onAction_volver_busqueda_medicos(event) {
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"568F1CAC-B084-4A25-93BD-DD20F5A0887D"}
 */
function onAction_ayuda_busqueda_medicos(event) {
	globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
