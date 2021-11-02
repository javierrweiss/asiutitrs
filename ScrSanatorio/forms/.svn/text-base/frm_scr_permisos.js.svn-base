/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D053035-189C-4E2C-88AE-383B9D2DC37D"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.codigo.requestFocus()  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3994F0C-848A-4DBC-A355-5FF4F6C5E23E"}
 */
function onAction_captura(event) {
	globals.gbl_selec  = foundset.getSelectedIndex()
	globals.gbl_con_usuario = foundset.codigo_legajo	
	application.getWindow('Busca_permiso').hide();
}
