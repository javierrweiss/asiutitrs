/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DD20570F-8E12-423E-B30E-3474E54A71E9"}
 */
function onAction_FIND(event) {
	//if (scopes.globals.fichaaneste_cirujano_alf != '' && scopes.globals.fichaaneste_cirujano_alf != null)
		//{scopes.globals.fichaaneste_cirujano_alf = scopes.globals.fichaaneste_cirujano_alf.toLocaleUpperCase()}
	globals.fichaaneste_cirujano_alf = globals.fichaaneste_cirujano_alf.toLocaleUpperCase()
	elements.tabless_medicos_personal.tabIndex = 1
	//forms.fichaaneste_medicos_personal_scroll.filtra()	
	forms.fichaaneste_medicos_personal_scroll.controller.focusFirstField()
	forms.fichaaneste_medicos_personal_scroll.elements.codigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D17E10AB-3251-4D5C-9084-FDD248720815"}
 */
function onAction_ayuda_medicos_personal(event) {
	//globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4534EFE2-A5DD-4337-8062-C9DA665230D4"}
 */
function onDataChange_buscar(oldValue, newValue, event) {
	onAction_FIND(event)
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3475F21-74C7-4124-9988-DAEF1393FA06"}
 */
function onShow_busqueda_medico(firstShow, event) {
	//elements.tabless_medicos_personal.tabIndex = 1
	//scopes.globals.fichaaneste_cirujano_alf = '' VER si ok
	//onAction_FIND(event)  // 14/07/2019
	
	elements.buscar.requestFocus()
}
