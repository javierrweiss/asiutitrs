/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA9B2C14-DEC5-4E4D-B955-133029BD8110"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.motnro.requestFocus()
	/* Esta consulta carga la vista de la tabla tbl_obras con un fitro por obr_estado <> 2 y 
	 * obr_ctroaten <> 0
	 */  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA1C6366-7F4B-4D63-B08D-683CEB5AE065"}
 */
function onAction_captura(event) {
	globals.gbl_cobertura = foundset.motnro
	application.getWindow('Busca_motivo').hide();
}
