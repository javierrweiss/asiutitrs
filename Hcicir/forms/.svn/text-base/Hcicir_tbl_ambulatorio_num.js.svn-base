/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3DFE3A67-E136-467F-9ECA-3B1CE287EA95"}
 */
function onAction_registro(event) {
	
	foundset.loadAllRecords();
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	if(res == 'Si'){
		
		var paciente = foundset['histcabnrounico'];
		paciente += ' - ' +  foundset['histcabapellnom'];
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_paciente = utils.stringTrim(paciente);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_histClinUnica = foundset['histcabnrounico'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_nroAfiliado = utils.stringTrim(foundset['histcabnrobenef']);
		globals.Hcicir_codObraSocial = foundset['histcabobra'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_cobertura = utils.stringTrim(globals.hcicir_buscar_obrasocial.obr_razonsoc);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_plan = utils.stringTrim(foundset['histcabplanx']);
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_nroInternado = foundset['histcabnrounico'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_fecNac = foundset['histcabfechanac'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_edad = foundset['histcabfechanac'] > 0 ? globals.CalculoEdad(foundset['histcabfechanac']) + ' ' +  globals.vTipoEdad : null;
		/*
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_planObr = utils.stringTrim(foundset['histcabplanx']);
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_obrSoc = foundset['histcabobra'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$tipoDocu = foundset['histcabtipodoc'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$nroDocu = foundset['histcabnrodoc'];
		
		
		globals.Anatpa_ploObra = foundset['histcabobra'];
		globals.Anatpa_ploPlanx = utils.stringTrim(foundset['histcabplanx']);
		forms.Anatpa_frm_anatpaca.f_ploEstado = globals.anatpa_buscar_plan.plo_estado;
		*/
		var isValid = forms.Hcicir_frm_hist_clin_ingreso_cirugia.isValidDatosPacienteAmbu();
		
		if(!isValid){

			globals.DIALOGS.showWarningDialog("Atención!",forms.Hcicir_frm_hist_clin_ingreso_cirugia.$messageErrorAmbu,"Aceptar");
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.limpiarForm();
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.txt_paciente.requestFocus();
			cerrarForm();
			
		}
		else{
			
			//globals.ControlAlerta(forms.Anatpa_frm_anatpaca.f_tipoPaciente,utils.stringToNumber(forms.Anatpa_frm_anatpaca.f_nroInternado),1,0);
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.editablePaciente(false);
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.$isDirty = true;
			cerrarForm();
			globals.Hcicir_eventSourceButton = 1;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.openSearchProtocolo();
		}
		
	}
}

/**
 * @properties={typeid:24,uuid:"EC17F735-B0D1-47D7-8D95-A36F284D0E33"}
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
 * @properties={typeid:24,uuid:"C50C7008-A30B-442E-99B0-00368E744B09"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}
