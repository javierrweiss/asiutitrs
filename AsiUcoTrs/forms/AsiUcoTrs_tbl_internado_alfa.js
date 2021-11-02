/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BFE37A6-DE78-4F02-ACBB-616A7E601463"}
 */
function onAction_registro(event){
	
	//foundset.loadAllRecords();
	//var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	//if(res == 'Si'){
		
		cerrarForm();
		//forms.Hcipiso_frm_hist_clin_ingreso_piso.f_paciente = utils.stringTrim(foundset.adm_apelnom);
		//globals.pruebas_nameCallerForm: nombre del form donde ejecutara la funcion onAction_pacienteSeleccionado
		//Luego de seleccionar un paciente
		//forms[globals.pruebas_nameCallerForm].onAction_pacienteSeleccionado(false);
		globals.AsiUcoTrs_adm_HistClin = foundset['adm_histclin'];
		forms.AsiUcoTrs_frm_hciuco.pacienteSeleccionadoInter();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34DA90F0-3708-4034-BD2D-D4F7FD169C18"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"C83FA831-6307-444F-9415-195ED4641C18"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
