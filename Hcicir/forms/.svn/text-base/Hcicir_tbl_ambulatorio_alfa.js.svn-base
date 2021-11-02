/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B9D1FDC8-976E-4C0B-BA73-5C20E3116624"}
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
 * @properties={typeid:24,uuid:"7064DAFD-D911-4425-B5D6-D864CCA5AC95"}
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
 * @properties={typeid:24,uuid:"4B0D71E7-5221-4BDB-B6C2-D0CA0DB6EC2A"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
