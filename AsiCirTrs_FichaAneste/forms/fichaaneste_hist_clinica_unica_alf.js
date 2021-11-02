/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73823825-96F0-4E2E-AF6F-6D8153F894B1"}
 */
var f_puntero_pag_ant = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBFAC58E-2DC0-4960-882F-946D05E47E0E"}
 */
function onAction_hist_clinica_alf(event) {
	
	// TODO  LLENAR las variables necesarias  25/04/2019 
	//  TODO globals.vHiscli=foundset['histcabnrounico'];
	scopes.globals.fichaaneste_histcliuni = foundset['histcabnrounico'];
	scopes.globals.fichaaneste_vedad = globals.CalculoEdad(foundset['histcabfechanac'])+' '+globals.vTipoEdad
	globals.vNameSolucion = application.getSolutionName()
	globals.vFormulario = "fichaaneste_tab_scr_pacientes"
		/*  va esto?
	if(reimpresor_vs_to_tbc_ciruguar.getSize() > 0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}   */

	application.showForm(forms.fichaaneste_tab)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"49F0451E-55BB-46EC-8D06-B1202D2CFE7B"}
 */
function onHide(event) {
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
