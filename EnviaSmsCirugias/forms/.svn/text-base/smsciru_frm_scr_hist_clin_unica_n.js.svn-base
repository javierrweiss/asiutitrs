/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3F51BF41-CD0C-4E07-82E0-9B044A393E83"}
 */
function onAction_registro(event) {

	var paciente = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabnrounico;
	paciente += ' - ' +  forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_paciente = paciente.toString().trim();
	globals.vHiscli = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabnrounico;
	globals.smsciru_codObraSocial = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabobra;
	forms.smsciru_frm_enviasms_ini.f_cobertura = smsciru_codobra_to_tbc_obras.obr_razonsoc;
	
	forms.smsciru_frm_enviasms_ini.f_plan = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabplanx;
	forms.smsciru_frm_enviasms_ini.f_histClinUnica = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabnrounico;
	forms.smsciru_frm_enviasms_ini.$paciente = forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_edad = globals.CalculoEdad(forms.smsciru_frm_scr_hist_clin_unica_n.foundset.histcabfechanac)+" "+globals.vTipoEdad;
	
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
 * @properties={typeid:24,uuid:"92DB1D50-90E7-41C9-B623-7886F907CDF2"}
 */
function onFocusGained_registro(event) {
	if(globals.smsciru_gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.smsciru_gbl_activoFormBuscarInternado = 1
	}
}
