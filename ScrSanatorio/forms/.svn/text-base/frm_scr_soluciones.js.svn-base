/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DE8AB5D-82FB-4A2B-A5AD-8DCE32CEAE7C"}
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
 * @properties={typeid:24,uuid:"6A5B5EDF-4AF2-4732-87E6-86DE4EB80AC2"}
 */
function onAction_captura(event) {
	globals.gbl_selec    = foundset.getSelectedIndex()
	globals.gbl_solucion = foundset.codigo	
	application.getWindow('Busca_solucion').hide();
}
