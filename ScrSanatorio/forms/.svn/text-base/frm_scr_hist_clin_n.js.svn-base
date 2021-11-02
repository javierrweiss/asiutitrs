/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"949C9221-F4FD-4A5C-BF9D-0DDFD1D28B90"}
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
 * @properties={typeid:24,uuid:"C0B46BBB-6ABE-4B35-954E-EDC97F2019FF"}
 */
function onAction_captura(event) {
	globals.gbl_cobertura = foundset.adm_histclin_1
	application.getWindow('Busca_hist_clin').hide();
}
