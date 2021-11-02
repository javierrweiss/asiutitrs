/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E56CD627-E3D5-4B41-98D8-27C012C25BE8"}
 */
function onAction_FIND(event) {
	globals.vPatologiaAlfa=globals.vPatologiaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.frm_scroll_patologias.controller.focusFirstField()
	forms.frm_scroll_patologias.elements.pat_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16531066-00A9-4C2A-802F-440538E419F2"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9E7D846-9BBC-4DB3-9B22-55214B3C0166"}
 */
function onAction_ayuda_busqueda_patologias(event) {
	globals.textoAyuda='AYUDA-11'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Códigos de Patologías";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
