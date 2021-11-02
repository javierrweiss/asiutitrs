/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E96CF3F-B290-4B81-B789-61DA41936869"}
 */
function onAction_registro(event){
	
	cerrarForm();
	asiucotrs_rel_hciuco[globals.AsiUcoTrs_patDataProvider] = foundset.pat_codi;
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9907F13A-E9BE-4CD6-BD19-8D37A9043E6A"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"3D3E6259-39DF-4C7C-8BCB-2D93558DC1D9"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
