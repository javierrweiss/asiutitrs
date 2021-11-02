/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33E7E0F2-F809-4239-9BC1-F2895685EC6F"}
 */
function onAction_registro(event) {

	//foundset.loadAllRecords();
	//var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	//if(res == 'Si'){
		cerrarForm();
		//forms.AsiUcoTrs_frm_hciuco.f_paciente = utils.stringTrim(foundset.adm_apelnom);
		//globals.pruebas_nameCallerForm: nombre del form donde ejecutara la funcion onAction_pacienteSeleccionado
		//Luego de seleccionar un paciente
		//forms[globals.pruebas_nameCallerForm].onAction_pacienteSeleccionado(true);
		globals.AsiUcoTrs_adm_HistClin = asiucotrs_numero_to_tbc_admision.adm_histclin;
		forms.AsiUcoTrs_frm_hciuco.pacienteSeleccionadoInter();
		
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76AD44EC-5958-4D87-9C47-7DFB835C155D"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"DD67DE63-E4B8-4B2B-844D-0FA01C75488C"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
