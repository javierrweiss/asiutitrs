
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F99F9187-ACEC-4E1B-8DE4-CB166195B32D"}
 */
function onAction_registro(event) {

	var paciente = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabnrounico;
	paciente += ' - ' +  forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabapellnom;
	//forms.frm_protesis.f_paciente = paciente.toString().trim();
	
	//globals.gbl_protesis_codObraSocial = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabobra;
	//forms.frm_protesis.f_cobertura = globals.protesis_buscar_obrasocial.obr_razonsoc;
	//forms.frm_protesis.f_plan = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabplanx;
	//forms.frm_protesis.f_histClinUnica = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabnrounico;
	//forms.frm_protesis.$paciente = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabapellnom;
	//forms.frm_protesis.f_edad = globals.CalculoEdad(forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabfechanac)+" "+globals.vTipoEdad;
	
	forms.prote_frmRecepcionProtesis.f_paciente = paciente.toString().trim();
	forms.prote_frmRecepcionProtesis.f_histClinUnica = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabnrounico;
	forms.prote_frmRecepcionProtesis.$paciente = forms.frm_scr_hist_clin_unica_n_protesis.foundset.histcabapellnom;
	forms.prote_frmRecepcionProtesis.elements.cbo_tipoPrioridad.requestFocus();
	forms.prote_frmRecepcionProtesis.$isDirty = true;
	
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"66321323-4069-4C6F-A4E6-562F19F4FFEB"}
 */
function onFocusGained_registro(event) {
	if(globals.gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.gbl_activoFormBuscarInternado = 1
	}
}
