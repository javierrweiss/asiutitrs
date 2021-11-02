
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BBCC668-368D-46C3-A6C1-99395804E154"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var ds_servicios = databaseManager.createEmptyDataSet();
	ds_servicios.addColumn('display_values');
	ds_servicios.addColumn('optional_real_values');
	ds_servicios.addRow(['',1]);
	forms.Anatpa_frm_anatpaca.elements.cbo_servicio.setValueListItems(ds_servicios);
	
	forms.Anatpa_frm_anatpaca.inicializarForm();
	forms.Anatpa_frm_anatpaca.setDefaultBorderElements();
	globals.anatpa_interface_nroSolicitud = 0;
	
	forms.Anatpa_frm_anatpaca.f_tipoPaciente = globals.Anatpa_interface_tipoPaciente;
	forms.Anatpa_frm_anatpaca.onAction_cboTipoPaciente(event);
	
	if(forms.Anatpa_frm_anatpaca.f_tipoPaciente == 2 || forms.Anatpa_frm_anatpaca.f_tipoPaciente == 1){
		
		forms.Anatpa_frm_anatpaca.f_servicio = globals.Anatpa_interface_servicio;//21
		forms.Anatpa_frm_anatpaca.f_nroPedido = globals.Anatpa_interface_nroPedido;//0
		forms.Anatpa_frm_anatpaca.$fechaPedido = globals.FormatearFecha(utils.timestampToDate( application.getServerTimeStamp()),'AAAAMMDD');
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = globals.Anatpa_interface_tipoMedico;
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = globals.Anatpa_interface_legajoMedico;// Sin digito verificador
		forms.Anatpa_frm_anatpaca.$fechaIngreso = globals.Anatpa_interface_fecha;
		forms.Anatpa_frm_anatpaca.$horaIngreso = globals.Anatpa_interface_hora;// maximo 4 digitos
		//TODO globals.Anatpa_interface_iva
		
		forms.Anatpa_frm_anatpaca.elements.cbo_servicio.readOnly = true;
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.btn_buscarPedido.enabled = false;
	}

	var paciente = anatpa_ambulatorio_buscar_numero.histcabnrounico.toString();
	paciente += ' - ' +  anatpa_ambulatorio_buscar_numero.histcabapellnom;
	
	forms.Anatpa_frm_anatpaca.f_paciente = utils.stringTrim(paciente);
	forms.Anatpa_frm_anatpaca.f_histClinUnica = anatpa_ambulatorio_buscar_numero.histcabnrounico;
	forms.Anatpa_frm_anatpaca.f_nroAfiliado = utils.stringTrim(anatpa_ambulatorio_buscar_numero.histcabnrobenef);
	globals.Anatpa_codObraSocial = anatpa_ambulatorio_buscar_numero.histcabobra;
	forms.Anatpa_frm_anatpaca.f_cobertura = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_razonsoc);
	forms.Anatpa_frm_anatpaca.f_plan = utils.stringTrim(anatpa_ambulatorio_buscar_numero.histcabplanx);
	
	forms.Anatpa_frm_anatpaca.f_nombre = utils.stringTrim(anatpa_ambulatorio_buscar_numero.histcabapellnom);
	forms.Anatpa_frm_anatpaca.f_obrEstado = globals.anatpa_buscar_obrasocial.obr_estado;
	forms.Anatpa_frm_anatpaca.f_obrEsPami = globals.anatpa_buscar_obrasocial.obr_espami;
	forms.Anatpa_frm_anatpaca.f_obrMotSusp = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_motsuspen);
	
	forms.Anatpa_frm_anatpaca.f_nroInternado = anatpa_ambulatorio_buscar_numero.histcabnrounico;
	forms.Anatpa_frm_anatpaca.f_planObr = utils.stringTrim(anatpa_ambulatorio_buscar_numero.histcabplanx);
	forms.Anatpa_frm_anatpaca.f_obrSoc = anatpa_ambulatorio_buscar_numero.histcabobra;
	forms.Anatpa_frm_anatpaca.$tipoDocu = anatpa_ambulatorio_buscar_numero.histcabtipodoc;
	forms.Anatpa_frm_anatpaca.$nroDocu = anatpa_ambulatorio_buscar_numero.histcabnrodoc;
	forms.Anatpa_frm_anatpaca.f_fecNac = anatpa_ambulatorio_buscar_numero.histcabfechanac;
	
	globals.Anatpa_ploObra = anatpa_ambulatorio_buscar_numero.histcabobra;
	globals.Anatpa_ploPlanx = utils.stringTrim(anatpa_ambulatorio_buscar_numero.histcabplanx);
	forms.Anatpa_frm_anatpaca.f_ploEstado = globals.anatpa_buscar_plan.plo_estado;
	
	var isValid = forms.Anatpa_frm_anatpaca.isValidDatosPacienteAmbu();
	
	if(!isValid){

		globals.DIALOGS.showWarningDialog("Atención!",forms.Anatpa_frm_anatpaca.$messageErrorAmbu,"Aceptar");
		forms.Anatpa_frm_anatpaca.clearDatosPaciente();
		forms.Anatpa_frm_anatpaca.editablePaciente(false);
		forms.Anatpa_frm_anatpaca.clearDatosServicio();
		//forms.Anatpa_frm_anatpaca.elements.txt_paciente.requestFocus();
	}
	else{
		var tipoAdmis = (forms.Anatpa_frm_anatpaca.f_tipoPaciente == 0 ? 0 : 1);
		globals.ControlAlerta(tipoAdmis,utils.stringToNumber(forms.Anatpa_frm_anatpaca.f_nroInternado),1,0);
		forms.Anatpa_frm_anatpaca.editablePaciente(false);
		//forms.Anatpa_frm_anatpaca.clearDatosServicio();
		forms.Anatpa_frm_anatpaca.$isDirty = true;
	
		forms.Anatpa_frm_anatpaca.elements.cbo_tipoPaciente.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.btn_buscarPaciente.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.btn_nuevo.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.btn_cerrar.enabled = false;
		
		forms.Anatpa_frm_anatpaca.elements.btn_agregarItem.enabled = true;
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.readOnly = false;
		
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.requestFocus();
	}
}
