/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6582C45C-AD26-4EA7-ADE3-A28D7539B32B"}
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
 * @properties={typeid:24,uuid:"C4276028-D5C4-46E5-B2F0-9F5CF1238564"}
 */
function onAction_captura(event) {
	globals.gbl_selec    = foundset.getSelectedIndex()
	globals.gbl_solucion = foundset.carpeta	
	application.getWindow('Busca_carpetas').hide();
}
