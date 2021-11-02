/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA30D8B3-D42D-455E-9ED8-C2FEF7BBB8FF"}
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
 * @properties={typeid:24,uuid:"A4A2A4C9-8771-4A11-90CF-94F183D6DDD9"}
 */
function onAction_captura(event) {
	globals.gbl_selec = foundset.getSelectedIndex()	
	application.getWindow('Busca_elemento').hide();
}
