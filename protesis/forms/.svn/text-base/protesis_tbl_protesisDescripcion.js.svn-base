/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE4CA3B2-32B9-43E3-AB22-37750FC5F760"}
 */
function onAction_registro(event) {
	
	//globals.vHiscli=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_histclin 
	//globals.vApeyNom=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_apelnom
	//globals.vSexo=forms.frm_scr_tbc_admision_L_protesis.foundset.adm_sexo
	//globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_L_protesis.foundset.adm_fecing)
	//globals.vHoraIngreso=forms.frm_scr_tbc_admision_L_protesis.adm_horing
	//application.closeAllWindows()

	var protesis = forms.protesis_tbl_protesisDescripcion.foundset.mp_codiprot;
	forms.protesis_frm_agregarProtesis.f_codigoProtesis = protesis;
	protesis += ' ' +  forms.protesis_tbl_protesisDescripcion.foundset.mp_descripcion;
	forms.protesis_frm_agregarProtesis.f_protesis = protesis.toString().trim();
	
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
 * @properties={typeid:24,uuid:"91EA9548-CC72-4F6C-8EFF-F96E092604DE"}
 */
function onFocusGained_registro(event) {
	if(globals.gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.gbl_activoFormBuscarInternado = 1
	}
}
