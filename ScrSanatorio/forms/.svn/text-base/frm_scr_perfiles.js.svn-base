/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"850C883E-06A8-4444-A428-14404B69CB83"}
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
 * @properties={typeid:24,uuid:"D1F2A100-B3F3-443B-8A0D-176D9B35FF29"}
 */
function onAction_captura(event) {
	globals.gbl_selec  = foundset.getSelectedIndex()
	globals.gbl_perfil = foundset.codigo	
	application.getWindow('Busca_perfil').hide();
}
