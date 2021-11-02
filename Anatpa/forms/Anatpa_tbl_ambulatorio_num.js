/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DA43829B-AD0F-4BE6-B0CC-C752D3B8A388"}
 */
function onAction_registro(event) {
	
	foundset.loadAllRecords();
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	if(res == 'Si'){
		
		var paciente = foundset['histcabnrounico'];
		paciente += ' - ' +  foundset['histcabapellnom'];
		
		forms.Anatpa_frm_anatpaca.f_paciente = utils.stringTrim(paciente);
		forms.Anatpa_frm_anatpaca.f_histClinUnica = foundset['histcabnrounico'];
		forms.Anatpa_frm_anatpaca.f_nroAfiliado = utils.stringTrim(foundset['histcabnrobenef']);
		globals.Anatpa_codObraSocial = foundset['histcabobra'];
		forms.Anatpa_frm_anatpaca.f_cobertura = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_razonsoc);
		forms.Anatpa_frm_anatpaca.f_plan = utils.stringTrim(foundset['histcabplanx']);
		
		forms.Anatpa_frm_anatpaca.f_nombre = utils.stringTrim(foundset['histcabapellnom']);
		forms.Anatpa_frm_anatpaca.f_obrEstado = globals.anatpa_buscar_obrasocial.obr_estado;
		forms.Anatpa_frm_anatpaca.f_obrEsPami = globals.anatpa_buscar_obrasocial.obr_espami;
		forms.Anatpa_frm_anatpaca.f_obrMotSusp = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_motsuspen);
		
		forms.Anatpa_frm_anatpaca.f_nroInternado = foundset['histcabnrounico'];
		forms.Anatpa_frm_anatpaca.f_planObr = utils.stringTrim(foundset['histcabplanx']);
		forms.Anatpa_frm_anatpaca.f_obrSoc = foundset['histcabobra'];
		forms.Anatpa_frm_anatpaca.$tipoDocu = foundset['histcabtipodoc'];
		forms.Anatpa_frm_anatpaca.$nroDocu = foundset['histcabnrodoc'];
		forms.Anatpa_frm_anatpaca.f_fecNac = foundset['histcabfechanac'];
		
		globals.Anatpa_ploObra = foundset['histcabobra'];
		globals.Anatpa_ploPlanx = utils.stringTrim(foundset['histcabplanx']);
		forms.Anatpa_frm_anatpaca.f_ploEstado = globals.anatpa_buscar_plan.plo_estado;
		
		var isValid = forms.Anatpa_frm_anatpaca.isValidDatosPacienteAmbu();
		
		if(!isValid){

			globals.DIALOGS.showWarningDialog("Atención!",forms.Anatpa_frm_anatpaca.$messageErrorAmbu,"Aceptar");
			forms.Anatpa_frm_anatpaca.clearDatosPaciente();
			forms.Anatpa_frm_anatpaca.editablePaciente(true);
			forms.Anatpa_frm_anatpaca.clearDatosServicio();
			forms.Anatpa_frm_anatpaca.elements.txt_paciente.requestFocus();
		}
		else{
			
			var tipoAdmis = (forms.Anatpa_frm_anatpaca.f_tipoPaciente == 0 ? 0 : 1);
			globals.ControlAlerta(tipoAdmis,utils.stringToNumber(forms.Anatpa_frm_anatpaca.f_nroInternado),1,0);
			forms.Anatpa_frm_anatpaca.editablePaciente(false);
			forms.Anatpa_frm_anatpaca.clearDatosServicio();
			forms.Anatpa_frm_anatpaca.$isDirty = true;
			forms.Anatpa_frm_anatpaca.elements.cbo_servicio.requestFocus();
		}
		
		var $name = application.getActiveWindow().getName();
		var $win = application.getWindow($name);
		if($win!=null){
			$win.hide();
			$win.destroy();
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9ABAD07-D66E-4E44-817C-8AA2F30E71B0"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}
