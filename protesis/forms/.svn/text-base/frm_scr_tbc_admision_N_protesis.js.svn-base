/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEB125A7-01E4-4DF9-BB2F-D789EE5F9A70"}
 */
function onAction_registro(event) {
	//globals.vHiscli=forms.frm_scr_tbc_admision_N_protesis.foundset.adm_histclin 
	//globals.vApeyNom=forms.frm_scr_tbc_admision_N_protesis.foundset.adm_apelnom
	//globals.vSexo=forms.frm_scr_tbc_admision_N_protesis.foundset.adm_sexo
	//globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_N_protesis.foundset.adm_fecing)
	//globals.vHoraIngreso=forms.frm_scr_tbc_admision_N_protesis.adm_horing
	//application.closeAllWindows()
	
	var paciente = globals.formatearNumeroIntervencion(forms.frm_scr_tbc_admision_N_protesis.foundset.adm_histclin);
	paciente += ' - ' +  forms.frm_scr_tbc_admision_N_protesis.foundset.adm_apelnom;
	
	//forms.frm_protesis.f_paciente = paciente.toString().trim();
	//globals.gbl_protesis_codObraSocial = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_obrsoc;
	//forms.frm_protesis.f_cobertura = globals.protesis_buscar_obrasocial.obr_razonsoc;
	//forms.frm_protesis.f_plan = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_planobr;
	//forms.frm_protesis.f_histClinUnica = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_histclinuni;
	//forms.frm_protesis.$paciente = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_apelnom;
	//forms.frm_protesis.f_edad = globals.CalculoEdad(forms.frm_scr_tbc_admision_N_protesis.foundset.adm_fecnac)+" "+globals.vTipoEdad;
	
	forms.prote_frmRecepcionProtesis.f_paciente = paciente.toString().trim();
	forms.prote_frmRecepcionProtesis.f_histClinUnica = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_histclinuni;
	forms.prote_frmRecepcionProtesis.$paciente = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_apelnom;
	forms.prote_frmRecepcionProtesis.$nro_internacion = forms.frm_scr_tbc_admision_N_protesis.foundset.adm_histclin;
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
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D50B03C0-E300-4CD3-B8AF-13AEDAFA896B"}
 */
function onFocusGained_registro(event) {
	if(globals.gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.gbl_activoFormBuscarInternado = 1
	}
}
