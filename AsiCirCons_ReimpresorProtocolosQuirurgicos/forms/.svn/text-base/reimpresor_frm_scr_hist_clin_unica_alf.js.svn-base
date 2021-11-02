/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6722B3E-6B3E-4507-B841-7E09551CD381"}
 */
var f_puntero_pag_ant = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E32F543-63D9-47CB-B3AE-F4A4291ACF6A"}
 */
function onAction_hist_clinica_alf(event) {
	globals.vHiscli=foundset['histcabnrounico'];
	globals.vEdad=globals.CalculoEdad(foundset['histcabfechanac'])+' '+globals.vTipoEdad
	globals.vNameSolucion=application.getSolutionName()
	globals.vFormulario="reimpresor_tab_scr_pacientes"
	if(reimpresor_vs_to_tbc_ciruguar.getSize()>0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7C2452A0-68D2-4632-96F0-39C807AB0106"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"828B1B64-D9E2-4929-84AA-BF1FA6013E3D"}
 */
function onAction_siguiente_pagina(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5231CBE8-8BC8-41FC-9A89-3571BA60E584"}
 */
function onAction_pagina_anterior(event) {
	
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"34484E9B-FC82-4240-9954-3602527CA203"}
 */
function onFocusGained_elemento(event) {
	onAction_hist_clinica_alf(event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"020CB144-92FF-479B-B939-FF562CAF132E"}
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

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C0E6D6D-3847-4C9A-986E-71C280B42AEE"}
 */
function onRecordSelection_reimpresor_frm_scr_hist_clin_unica(event) {
	globals.vHiscli=foundset['histcabnrounico']
	globals.vEdad=globals.CalculoEdad(foundset['histcabfechanac'])+' '+globals.vTipoEdad
	if(reimpresor_vs_to_tbc_ciruguar.getSize()>0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}
