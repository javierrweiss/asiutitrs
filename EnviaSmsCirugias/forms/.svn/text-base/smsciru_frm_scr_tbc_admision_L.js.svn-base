/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBA3BFA9-2B5D-40E6-9467-3B653026C162"}
 */
function onAction_registro(event) {
	
	//globals.vHiscli=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_histclin 
	//globals.vApeyNom=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_apelnom
	//globals.vSexo=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_sexo
	//globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_L_protesis.foundset.adm_fecing)
	//globals.vHoraIngreso=forms.frm_scr_tbc_admision_L_protesis.adm_horing
	//application.closeAllWindows()
	globals.smsciru_hiscliunica= forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_histclinuni;
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
	var paciente = globals.smsciru_formatearNumeroIntervencion(forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_histclin);
	paciente += ' - ' +  forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_apelnom;
	
	forms.smsciru_frm_enviasms_ini.f_paciente = paciente.toString().trim();
	globals.vHiscli=forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_histclin
	globals.smsciru_codObraSocial = forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_obrsoc;
	forms.smsciru_frm_enviasms_ini.f_cobertura = smsciru_codobra_to_tbc_obras.obr_razonsoc;
	
	forms.smsciru_frm_enviasms_ini.f_plan = forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_planobr;
	forms.smsciru_frm_enviasms_ini.f_histClinUnica = forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_histclinuni;
	forms.smsciru_frm_enviasms_ini.$paciente = forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_apelnom;
	forms.smsciru_frm_enviasms_ini.f_edad = globals.CalculoEdad(forms.smsciru_frm_scr_tbc_admision_L.foundset.adm_fecnac)+" "+globals.vTipoEdad;
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
 * @properties={typeid:24,uuid:"40F63BC1-E226-4770-9462-EE62A214FA93"}
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
 * @properties={typeid:24,uuid:"5F5D55EB-B588-47D9-BD2B-0D4223427094"}
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
