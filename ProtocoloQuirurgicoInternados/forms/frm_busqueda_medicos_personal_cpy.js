/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8007C01-EC9B-4D51-BDBC-331149C979D9"}
 */
function onAction_FIND(event) {
	globals.vProfeAlfa=globals.vProfeAlfa.toLocaleUpperCase()
	elements.tabless_medicos_personal.tabIndex = 1
	forms.frm_scroll_medicos_personal.controller.focusFirstField()
	forms.frm_scroll_medicos_personal.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FA2ADC2-B61D-43D2-8564-736D8B55B828"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"721F3D13-E7BC-4242-883C-9A2C28A0B47E"}
 */
function onAction_ayuda_medicos_personal(event) {
	globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
