/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"46A243A0-9A74-4AF2-8DFB-A118A4F60A56"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= globals.gbl_con_indice
	forms.frm_scr_nomencla.filtra() 
}

/** 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"3726F992-2503-4227-9B5D-B6F4227BAA1A"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_nomencla.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
