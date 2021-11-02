/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7052844-62B8-430D-AFAD-D70994CD9472"}
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
 * @properties={typeid:24,uuid:"19791634-CA5C-4291-A8BD-0E48F7B645B7"}
 */
function onAction_captura(event) {
	//globals.gbl_cobertura = foundset.adm_histclin
	application.getWindow('Busca_hist_clin_unica').hide();
}
