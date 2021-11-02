/**
 * TODO generated, please specify type and doc for the params
 * @param histclin
 *
 * @properties={typeid:24,uuid:"C276CC0A-E97E-42E7-9021-95FAEA7B5A66"}
 */
function esHistoriaClinica(histclin){
	// return histclin.match(/\d+\/\d/g) != null ? true : false; En caso que querramos cercionarnos que la historia clinica sólo puede introducirse con el patrón xxx/x 
	return histclin.match(/\d+/g) != null ? true : false;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9549062A-8F62-4589-AAD3-F25A1BA191D9"}
 */
function onActionBuscarPaciente(event) {
	if (esHistoriaClinica(globals.gbl_admin_histclin_a)){
		globals.gbl_adm_histclin_n = utils.stringToNumber(globals.gbl_admin_histclin_a.valueOf());
		elements.tabless.tabIndex = 1;
	} else {
		globals.gbl_admin_histclin = globals.gbl_admin_histclin_a.toUpperCase();
		elements.tabless.tabIndex = 2;
	}
	
}
