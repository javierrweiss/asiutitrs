/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1ABE5969-2936-4AD0-A3AF-44E436428433"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.adm_histclinuni.requestFocus()
	/* Esta consulta carga la vista de la tabla tbl_obras con un fitro por obr_estado <> 2 y 
	 * obr_ctroaten <> 0
	 */  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57DCE7C4-B1E2-446F-8295-ED391DFD6C93"}
 */
function onAction_captura(event) {
	//globals.gbl_cobertura = foundset.adm_histclin_1
	application.getWindow('Busca_hist_clin_unica').hide();
}
