/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFA63536-6F1A-41F6-9C38-C2F531D759D0"}
 */
function onAction_FIND(event) {
	globals.protambu1400_vpatologiaAlfa=globals.protambu1400_vpatologiaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.protambu_frm_scroll_patologias.controller.focusFirstField()
	forms.protambu_frm_scroll_patologias.elements.pat_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBC3F7A6-1283-4B31-97B3-092DDA29640B"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A22E549-32F4-4DB7-8635-E3884DD6923A"}
 */
function onAction_ayuda_busqueda_patologias(event) {
	//globals.textoAyuda='AYUDA-11'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Códigos de Patologías";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
