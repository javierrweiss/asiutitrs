/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED2F5318-393A-43AA-82FB-C23BA08B8964"}
 */
function onAction_FIND(event) {
	globals.vLegajoAlfa=globals.vLegajoAlfa.toLocaleUpperCase()
	elements.tabless_personal.tabIndex = 1
	forms.frm_scroll_personal_copy_copy.controller.focusFirstField()
	forms.frm_scroll_personal_copy_copy.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2565262A-FE32-4393-8E7F-C05587C4FF4A"}
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
 * @properties={typeid:24,uuid:"B2B3E054-AF37-4C14-B5B3-E71C5FE3FFDB"}
 */
function onAction_buscar_en_medicos(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Instrumentadora";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	globals.vTipoMedico=5
	win.show(forms.frm_busqueda_medicos_personal)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F1F9CC5-93BB-47E5-8043-23B9937DBD02"}
 */
function onAction_ayuda_busqueda_personal_copy(event) {
	globals.textoAyuda='AYUDA-12'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Instrumentadora";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
