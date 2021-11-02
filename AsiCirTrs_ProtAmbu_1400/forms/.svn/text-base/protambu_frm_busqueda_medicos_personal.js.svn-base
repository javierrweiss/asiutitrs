/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"690A599C-D061-4823-90F8-40FE5E3F587F"}
 */
function onAction_FIND(event) {
	globals.protambu1400_cirujanoalf=globals.protambu1400_cirujanoalf.toLocaleUpperCase()
	elements.tabless_medicos_personal.tabIndex = 1
	forms.protambu_frm_scroll_medicos_personal.controller.focusFirstField()
	forms.protambu_frm_scroll_medicos_personal.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD888D7A-0E0A-44D3-8CC6-234B14685B7B"}
 */
function onShow_busqueda_interven(firstShow, event) {
	globals.vProfeAlfa=''
	elements.buscar.requestFocus()
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F64CF09-37EF-46F8-8CBD-37194924EBBE"}
 */
function onAction_ayuda_medicos_personal(event) {
	//globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
