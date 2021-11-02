/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"91A2ED3E-605B-4ACC-8C2F-F560BD33EB76"}
 */
function onAction_registro(event) {
	var paciente = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabnrounico;
	paciente += ' - ' +  forms.frm_scr_hist_clin_unica_protesis.foundset.histcabapellnom;
	
	//forms.frm_protesis.f_paciente = paciente.toString().trim();
	//globals.gbl_protesis_codObraSocial = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabobra;
	//forms.frm_protesis.f_cobertura = globals.protesis_buscar_obrasocial.obr_razonsoc;
	//forms.frm_protesis.f_plan = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabplanx;
	//forms.frm_protesis.f_histClinUnica = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabnrounico;
	//forms.frm_protesis.$paciente = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabapellnom;
	//forms.frm_protesis.f_edad = globals.CalculoEdad(forms.frm_scr_hist_clin_unica_protesis.foundset.histcabfechanac)+" "+globals.vTipoEdad;
	
	forms.prote_frmRecepcionProtesis.f_paciente = paciente.toString().trim();
	forms.prote_frmRecepcionProtesis.f_histClinUnica = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabnrounico;
	forms.prote_frmRecepcionProtesis.$paciente = forms.frm_scr_hist_clin_unica_protesis.foundset.histcabapellnom;
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
 * @properties={typeid:24,uuid:"39C10F4F-82F6-45A2-84E5-3211CA61ECD6"}
 */
function onFocusGained_registro(event) {
	if(globals.gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.gbl_activoFormBuscarInternado = 1
	}
}