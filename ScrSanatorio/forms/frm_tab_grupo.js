/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09D4F682-B7E0-4120-945A-3FB62B82170D"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= globals.gbl_con_indice
	forms.frm_scr_grupo.filtra()
}
/**
 *
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"41790EB8-2A1A-4D15-9824-FCEB147FD8FD"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_grupo.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}