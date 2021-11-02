/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"84BC9D38-913A-4711-BD49-D5A8012176EA"}
 */
function onAction_registro(event) {
	globals.smsciru_hiscliunica=forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabnrounico;
	if(vs_to_smsciru_envios.getSize()>0){
		var existente = globals.DIALOGS.showQuestionDialog("Hist.Clinica Unica existente","Paciente con SMS enviado en la fecha."+'\n'+"¿Confirma un nuevo envío a este paciente?","No","Si")
		if(existente=="No"){
			return
		}
	}
	if((smsciru_histcliunica_to_tbc_hist_cab.histcabcodareacel_2<11||smsciru_histcliunica_to_tbc_hist_cab.histcabcodareacel_2==null)||(smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2==0||smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2==null||smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2=='')){
		var error_celular = globals.DIALOGS.showErrorDialog("Hist.Clinica Unica celular erróneo","Paciente sin número de celular ó con celular erróneo."+'\n'+"Avise a Admisión para que ingresen el celular.","Ok")
			return
	}
	var paciente = forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabnrounico;
	paciente += ' - ' +  forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_paciente = paciente.toString().trim();
	globals.vHiscli=forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabnrounico
	globals.smsciru_codObraSocial = forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabobra;
	forms.smsciru_frm_enviasms_ini.f_cobertura = smsciru_codobra_to_tbc_obras.obr_razonsoc;
	forms.smsciru_frm_enviasms_ini.f_plan = forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabplanx;
	forms.smsciru_frm_enviasms_ini.f_histClinUnica = forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabnrounico;
	forms.smsciru_frm_enviasms_ini.$paciente = forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_edad = globals.CalculoEdad(forms.smsciru_frm_scr_hist_clin_unica.foundset.histcabfechanac)+" "+globals.vTipoEdad;
	forms.smsciru_frm_enviasms_ini.elements.txt_histClinUnica.border='LineBorder,2,#008040';
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
 * @properties={typeid:24,uuid:"662821B7-272F-4AA1-99E5-3B2559F5D944"}
 */
function onFocusGained_registro(event) {
	if(globals.smsciru_gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.smsciru_gbl_activoFormBuscarInternado = 1
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4DE87DA2-39EE-4CA3-A9A0-02B59BCED4C6"}
 */
function onHide(event) {
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
