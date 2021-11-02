/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D653F317-B839-4682-A738-EFE6F5D4D3E6"}
 */
function onAction_Scroll_Interven(event) {
	
	var medico = forms.prote_tbl_medicos.foundset.medpercod;
	medico += " - " + forms.prote_tbl_medicos.foundset.medperapeynom.toString().trim();
	forms.prote_frmRecepcionProtesis.f_medico = medico;
	forms.prote_frmRecepcionProtesis.$medico = forms.prote_tbl_medicos.foundset.medperapeynom.toString().trim();
	forms.prote_frmRecepcionProtesis.$med_per_cod = forms.prote_tbl_medicos.foundset.medpercod;
	forms.prote_frmRecepcionProtesis.$medpertipoie = forms.prote_tbl_medicos.foundset.medpertipoie;
	forms.prote_frmRecepcionProtesis.loadEmailTo();
	forms.prote_frmRecepcionProtesis.elements.txt_intervencion.requestFocus();
	forms.prote_frmRecepcionProtesis.$isDirty = true;
	
	//application.closeAllWindows();   
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"06F5F789-DCB9-498F-836C-DDC20180A99C"}
 */
function onFocusGained_registro(event) {
	
	if(globals.prote_activoFormBuscarMedico == 1){
		onAction_Scroll_Interven(event)
	}
	else{
		globals.prote_activoFormBuscarMedico = 1
	}
}
