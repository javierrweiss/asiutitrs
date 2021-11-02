/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B01D8A5-F7B9-42BC-8AED-65FE5D72547C"}
 */
function onAction_registro(event){
	
	foundset.loadAllRecords();
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	if(res == 'Si'){
		
		var record = foundset.getSelectedRecord();
		var paciente = record.hiscli2;
		paciente += ' - ' +  foundset.adm_apelnom;
		
		forms.Anatpa_frm_anatpaca.f_paciente = utils.stringTrim(paciente);
		forms.Anatpa_frm_anatpaca.f_histClinUnica = foundset.adm_histclinuni;
		forms.Anatpa_frm_anatpaca.f_nroAfiliado = utils.stringTrim(foundset.adm_nrobenef);
		globals.Anatpa_codObraSocial = foundset.adm_obrsoc;
		forms.Anatpa_frm_anatpaca.f_cobertura = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_razonsoc);
		forms.Anatpa_frm_anatpaca.f_plan = utils.stringTrim(foundset.adm_planobr);
		
		forms.Anatpa_frm_anatpaca.f_nombre = utils.stringTrim(foundset.adm_apelnom);
		forms.Anatpa_frm_anatpaca.f_obrEstado = globals.anatpa_buscar_obrasocial.obr_estado;
		forms.Anatpa_frm_anatpaca.f_obrEsPami = globals.anatpa_buscar_obrasocial.obr_espami;
		forms.Anatpa_frm_anatpaca.f_obrMotSusp = utils.stringTrim(globals.anatpa_buscar_obrasocial.obr_motsuspen);
		
		forms.Anatpa_frm_anatpaca.f_nroInternado = foundset.adm_histclin;
		forms.Anatpa_frm_anatpaca.f_fecaltaefec = globals.IntegerToDate(foundset.adm_fecaltaefec);
		forms.Anatpa_frm_anatpaca.f_fecEpic = globals.IntegerToDate(foundset.adm_fecepic);
		forms.Anatpa_frm_anatpaca.f_planObr = utils.stringTrim(foundset.adm_planobr);
		forms.Anatpa_frm_anatpaca.f_obrSoc = foundset.adm_obrsoc;
		forms.Anatpa_frm_anatpaca.f_fecNac = foundset.adm_fecnac;
		forms.Anatpa_frm_anatpaca.$tipoDocu = foundset.adm_tipdocu;
		forms.Anatpa_frm_anatpaca.$nroDocu = foundset.adm_nrodocu;
		forms.Anatpa_frm_anatpaca.$nroInternado = foundset.hiscli2_anatpa;
		
		globals.Anatpa_ploObra = foundset.adm_obrsoc;
		globals.Anatpa_ploPlanx = foundset.adm_planobr;
		forms.Anatpa_frm_anatpaca.f_ploEstado = globals.anatpa_buscar_plan.plo_estado;
		
		var isValid = forms.Anatpa_frm_anatpaca.isValidDatosPacienteInter();
		
		if(!isValid){

			globals.DIALOGS.showWarningDialog("Atención!",forms.Anatpa_frm_anatpaca.$messageErrorInter,"Aceptar");
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
 * @properties={typeid:24,uuid:"5B9E1667-7226-44D4-95F4-B448436AAA4E"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
