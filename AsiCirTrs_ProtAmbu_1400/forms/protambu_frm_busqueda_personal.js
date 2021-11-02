/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"085902EA-75B2-4FCD-BF23-B4D9ABE6FA40"}
 */
function onAction_FIND(event) {
	globals.vLegajoAlfa=globals.vLegajoAlfa.toLocaleUpperCase()
	elements.tabless_personal.tabIndex = 1
	forms.protambu_frm_scroll_personal.controller.focusFirstField()
	forms.protambu_frm_scroll_personal.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DAE3622-36C6-4CF8-8770-1F68BC5CD6FA"}
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
 * @properties={typeid:24,uuid:"3F198CA7-4FEB-4E45-B0A9-371DE3E2A301"}
 */
function onAction_buscar_en_medicos(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Instrumentadora";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	globals.vTipoMedico=5
	win.show(forms.protambu_frm_busqueda_medicos_personal)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CF064DB-E68F-4234-916F-DCFA81B349A3"}
 */
function onAction_ayuda_busqueda_personal_copy(event) {
	//globals.textoAyuda='AYUDA-12'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Instrumentadora";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
