/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"7BC28207-8B33-4860-87FF-0AE113EBEF94"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	//forms.frm_scr_diagnostico.filtra()
}

/**
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"0FC321C8-3ED1-465C-BD72-4ED8A7AA3EEC"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	//forms.frm_scr_diagnostico.filtra()   
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
