/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A62DF859-268A-40F2-9551-B0DBB00D026B"}
 */
function onAction_registro(event) {
	
	//var paciente = globals.formatearNumeroIntervencion(forms.hojaenfer_tbl_buscar_internado_alfa.foundset.adm_histclin);
	//var hiclin = forms.hojaenfer_tbl_buscar_internado_alfa.foundset.adm_histclin;
	var record = foundset.getSelectedRecord();
	var paciente = record.hiscli2;
	paciente += ' - ' +  forms.hojaenfer_tbl_buscar_internado_alfa.foundset.adm_apelnom;
	
	forms.hojaenfer_frm_hoja_enfermeria.f_paciente = utils.stringTrim(paciente);
	forms.hojaenfer_frm_hoja_enfermeria.f_histClinica = foundset.adm_histclin;
	forms.hojaenfer_frm_hoja_enfermeria.f_edad = globals.CalculoEdad(foundset.adm_fecnac)  + ' ' + globals.vTipoEdad;
	//forms.hojaenfer_frm_hoja_enfermeria.f_habitacion = foundset.adm_habita;
	//forms.hojaenfer_frm_hoja_enfermeria.f_cama = foundset.adm_cama;
	//forms.hojaenfer_frm_hoja_enfermeria.f_utiliza = foundset.adm_utiliza;
	forms.hojaenfer_frm_hoja_enfermeria.f_fecaltaefec = globals.IntegerToDate(foundset.adm_fecaltaefec);
	
	forms.hojaenfer_frm_hoja_enfermeria.f_altaAdmin = globals.IntegerToDate(foundset.adm_fecaltaadmin);
	forms.hojaenfer_frm_hoja_enfermeria.f_Ingreso = globals.IntegerToDate(foundset.adm_fecing);
	forms.hojaenfer_frm_hoja_enfermeria.f_horaIngreso = foundset.adm_horing;
	
	forms.hojaenfer_frm_hoja_enfermeria.$isDirty = true;
	forms.hojaenfer_frm_hoja_enfermeria.cargarDatosPacienteSearch();
	
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
 * @properties={typeid:24,uuid:"3B0FE0ED-528A-4FF8-95C4-EAE568C4C030"}
 */
function onFocusGained_registro(event) {
	if(globals.hojaenfer_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.hojaenfer_activoFormBuscarInternado = 1
	}
}
