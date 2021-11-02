/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D794001-E9C5-48C3-946D-15A94568C573"}
 */
function onAction_scr_hist_clinica_unica_num(event) {
	// TODO  LLENAR las variables necesarias  25/04/2019 
	globals.vHiscli = foundset.histcabnrounico
	scopes.globals.fichaaneste_histcli = foundset.histcabnrounico
	scopes.globals.fichaaneste_vedad   = globals.CalculoEdad(foundset.histcabfechanac)+' '+globals.vTipoEdad
	globals.vNameSolucion  =  application.getSolutionName()
	globals.vFormulario = "fichaaneste_tab_scr_pacientes"
	/*  no va esto?
	if(reimpresor_vs_to_tbc_ciruguar.getSize()>0){
		forms.reimpresor_frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")}
		 */
	application.showForm(forms.fichaaneste_tab)
}
