/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF4C36BC-F998-49D0-9B86-D60162A07108"}
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
		globals.AsiUtiTrs_Hoja_hisclin = foundset['adm_histclin'];
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.pacienteSeleccionadoInter();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44C08B99-C325-4F50-9FDD-7058E6C2A730"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"2F54C634-5696-4AB9-9E1E-E956A333BA0C"}
 */
function cerrarForm () {
	

		var $name = application.getActiveWindow().getName();
		var $win = application.getWindow($name);
		if($win!=null){
			$win.hide();
			$win.destroy();
		}
	

}
