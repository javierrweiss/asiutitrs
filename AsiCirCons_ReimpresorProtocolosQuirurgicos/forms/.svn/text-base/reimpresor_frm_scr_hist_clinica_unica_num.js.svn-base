
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96DB6704-8A0B-4689-BD6B-0892F73FDE55"}
 */
function onAction_scr_hist_clinica_unica_num(event) {
	globals.vHiscli=foundset.histcabnrounico
	globals.vEdad=globals.CalculoEdad(foundset.histcabfechanac)+' '+globals.vTipoEdad
	globals.vNameSolucion=application.getSolutionName()
	if(reimpresor_vs_to_tbc_ciruguar.getSize()>0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"698007AB-80A2-4906-A424-D63D1EDFFCD2"}
 */
function onRecordSelection_reimpresor_frm_scr_hist_clinica_num(event) {
	globals.vHiscli=foundset.histcabnrounico
	globals.vEdad=globals.CalculoEdad(foundset.histcabfechanac)+' '+globals.vTipoEdad
	globals.vNameSolucion=application.getSolutionName()
	globals.vFormulario="reimpresor_tab_scr_pacientes"
	if(reimpresor_vs_to_tbc_ciruguar.getSize()>0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}
