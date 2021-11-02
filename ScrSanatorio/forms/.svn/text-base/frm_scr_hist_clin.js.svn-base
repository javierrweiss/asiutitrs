/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"128CB5FA-3BC5-4A68-B761-A6C24620247E"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.adm_histclin.requestFocus()
	/* Esta consulta carga la vista de la tabla tbl_obras con un fitro por obr_estado <> 2 y 
	 * obr_ctroaten <> 0
	 */  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43BAD9C4-F788-4C70-A98F-0966845A774F"}
 */
function onAction_captura(event) {
	globals.gbl_cobertura = foundset.adm_histclin
	application.getWindow('Busca_hist_clin').hide();
}
