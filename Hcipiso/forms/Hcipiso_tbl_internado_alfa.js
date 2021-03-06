/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB823012-1FFD-438B-8809-5D25F9829CB3"}
 */
var adm_apelnom = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E942330D-CFC3-4FD1-B9D1-ACEDE34D37A8"}
 */
var adm_histclin = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A6A8C76-1B2A-4924-AA0F-3B73CEA0ACA8"}
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
		globals.Hcipiso_hisclin = foundset['adm_histclin'];
		forms.Hcipiso_frm_hist_clin_ingreso_piso.pacienteSeleccionadoInter();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A77F0DBA-A4B4-4D8B-9323-ABF7DA5A6EE3"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"5A57E233-A900-4161-BF63-0CE2CC2C175B"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
