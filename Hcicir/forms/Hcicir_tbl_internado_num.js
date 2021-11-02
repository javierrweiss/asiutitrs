/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92E4888A-970D-45AE-852D-58504506C8A6"}
 */
function onAction_registro(event) {

	foundset.loadAllRecords();
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	if(res == 'Si'){
		
		var record = foundset.getSelectedRecord();
		var paciente = record.hiscli2_hcicir;
		paciente += ' - ' +  foundset.adm_apelnom;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_paciente = utils.stringTrim(paciente);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_histClinUnica = foundset.adm_histclinuni;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_nroAfiliado = utils.stringTrim(foundset.adm_nrobenef);
		globals.Hcicir_codObraSocial = foundset.adm_obrsoc;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_cobertura = utils.stringTrim(globals.hcicir_buscar_obrasocial.obr_razonsoc);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_plan = utils.stringTrim(foundset.adm_planobr);
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_fecaltaefec = globals.IntegerToDate(foundset.adm_fecaltaefec);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_fecNac = foundset.adm_fecnac;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_edad = foundset.adm_fecnac > 0 ? globals.CalculoEdad(foundset.adm_fecnac) + ' ' +  globals.vTipoEdad : null;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_nroInternado = foundset.adm_histclin;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$habita = foundset.adm_habita;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$cama = foundset.adm_cama;
		
		/*
		forms.Anatpa_frm_anatpaca.f_nombre = utils.stringTrim(foundset.adm_apelnom);
		forms.Anatpa_frm_anatpaca.f_obrEstado = globals.anatpa_buscar_obrasocial.obr_estado;
		forms.Anatpa_frm_anatpaca.f_obrEsPami = globals.anatpa_buscar_obrasocial.obr_espami;
		forms.Anatpa_frm_anatpaca.f_obrMotSusp = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_motsuspen);
		
		forms.Anatpa_frm_anatpaca.f_nroInternado = foundset.adm_histclin;
		
		forms.Anatpa_frm_anatpaca.f_fecEpic = globals.IntegerToDate(foundset.adm_fecepic);
		forms.Anatpa_frm_anatpaca.f_planObr = utils.stringTrim(foundset.adm_planobr);
		forms.Anatpa_frm_anatpaca.f_obrSoc = foundset.adm_obrsoc;
		
		forms.Anatpa_frm_anatpaca.$tipoDocu = foundset.adm_tipdocu;
		forms.Anatpa_frm_anatpaca.$nroDocu = foundset.adm_nrodocu;
		forms.Anatpa_frm_anatpaca.$nroInternado = foundset.hiscli2_anatpa;
		
		globals.Anatpa_ploObra = foundset.adm_obrsoc;
		globals.Anatpa_ploPlanx = foundset.adm_planobr;
		forms.Anatpa_frm_anatpaca.f_ploEstado = globals.anatpa_buscar_plan.plo_estado;
		*/
		var isValid = forms.Hcicir_frm_hist_clin_ingreso_cirugia.isValidDatosPacienteInter();
		
		if(!isValid){

			globals.DIALOGS.showWarningDialog("Atención!",forms.Hcicir_frm_hist_clin_ingreso_cirugia.$messageErrorInter,"Aceptar");
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.limpiarForm();
			/*
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.clearDatosPaciente();
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.editablePaciente(true);
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.txt_paciente.requestFocus();
			*/
			cerrarForm();
		}
		else{
			
			//globals.ControlAlerta(forms.Anatpa_frm_anatpaca.f_tipoPaciente,utils.stringToNumber(forms.Anatpa_frm_anatpaca.f_nroInternado),1,0);
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.editablePaciente(false);
			//forms.Hcicir_frm_hist_clin_ingreso_cirugia.clearDatosServicio();
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.$isDirty = true;
			//forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.cbo_servicio.requestFocus();
			//forms.Hcicir_frm_hist_clin_ingreso_cirugia.protocolosSinHistoria();
			cerrarForm();
			globals.Hcicir_eventSourceButton = 1;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.openSearchProtocolo();
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4CC83C2C-7486-4E6D-86B6-DBBCCB4B5370"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2D71FC9-CEB8-4908-A8F3-0ED8322F81DA"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
