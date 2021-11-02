/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC55F4DB-726B-4C2B-B21E-DCFE6B7DA0B4"}
 */
function onAction_registro(event) {

	//foundset.loadAllRecords();
	//var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma paciente?', 'Si', 'No');
	//if(res == 'Si'){
		cerrarForm();
		//forms.AsiUcoTrs_Hoja_frm_hciuco.f_paciente = utils.stringTrim(foundset.adm_apelnom);
		//globals.pruebas_nameCallerForm: nombre del form donde ejecutara la funcion onAction_pacienteSeleccionado
		//Luego de seleccionar un paciente
		//forms[globals.pruebas_nameCallerForm].onAction_pacienteSeleccionado(true);
		
		
		/*globals.AsiUcoTrs_Hoja_adm_HistClin = asiucotrs_hoja_numero_to_tbc_admision.adm_histclin;
		forms.AsiUcoTrs_Hoja_Evolucion_Uco.pacienteSeleccionadoInter();*/
		
		globals.AsiVm_adm_HistClin = foundset['adm_histclin'];
		forms.AsiVm_ficha_kine.cargarDatosPaciente();
		
		
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1202D797-0A12-4FD0-90A4-69F3964EE88D"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"48CB1053-B2EC-4F32-BC7D-0BD0482BECDD"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
