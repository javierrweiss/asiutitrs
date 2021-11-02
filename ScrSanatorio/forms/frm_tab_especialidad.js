/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"13B48297-5BDE-4062-9BC4-C076ABCA4E14"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	forms.frm_scr_especialidad.filtra()
}
/**
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"DD8AF92F-B874-48CC-9DF0-6F60ADEB9A1D"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_especialidad.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}

