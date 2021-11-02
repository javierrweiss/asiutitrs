/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CB40D43-BF3B-4015-BB35-FC830E0207A1"}
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
 * @properties={typeid:24,uuid:"B0B1F800-F140-4437-A37D-AAC6983B8C50"}
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
 * @properties={typeid:24,uuid:"18F483BA-9217-4F74-BAA0-D340453F5B34"}
 */
function onAction_ayuda_medicos_personal(event) {
	globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
