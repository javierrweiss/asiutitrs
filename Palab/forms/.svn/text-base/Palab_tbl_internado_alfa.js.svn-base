/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55A3E319-7D0F-4678-8012-08D703A3E0C7"}
 */
var adm_apelnom = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3022E352-7099-4765-8A41-963294E032DC"}
 */
var adm_histclin = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A8D8FE3-C05F-448F-8217-21500B95BFD3"}
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
		globals.Palab_hisclin = foundset['adm_histclin'];
		forms.Palab_frm_palab_inter.pacienteSeleccionadoInter();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9323B9FF-F8CA-4AB0-9CF3-2B46F53E2EFE"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"B5D49CED-5971-499A-B005-FA0A1A146B6F"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
