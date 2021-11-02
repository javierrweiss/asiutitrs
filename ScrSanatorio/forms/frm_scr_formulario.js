/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8235A8A3-D0AD-43FE-9F41-2F82E4DCB5E6"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.codigo_solucion.requestFocus()  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C922F3DD-7EC6-45DE-8184-7BF3B7D9B4D8"}
 */
function onAction_captura(event) {
	globals.gbl_selec      = foundset.getSelectedIndex()
	application.getWindow('Busca_formulario').hide();
}
