/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B10090B8-5765-4F86-972C-82964F953C23"}
 */
function onAction_registro(event){
	
	cerrarForm();
	hcipiso_rel_tbc_hciint_to_tbc_hciint[globals.Hcipiso_patDataProvider] = foundset.pat_codi;
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D2E1FBE-E319-40E8-9C17-6BBF5C95EB59"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"C61A6B5D-31FC-4C96-9715-8BFBA65DFF3F"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
