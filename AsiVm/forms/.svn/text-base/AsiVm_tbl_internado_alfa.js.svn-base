/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B72A202-32AB-464A-A1C0-90879262380C"}
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
		globals.AsiVm_adm_HistClin = foundset['adm_histclin'];
		globals.AsiVm_hisclin  = foundset['adm_histclin'];
		forms.AsiVm_ficha_kine.cargarDatosPaciente();
		//forms.AsiVm_Ficha_Inicio.pacienteSeleccionadoInter();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE50F144-6054-4453-9904-C18B285328C9"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"95D94964-A5DB-4AFA-A260-08CBB0BBA77E"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
