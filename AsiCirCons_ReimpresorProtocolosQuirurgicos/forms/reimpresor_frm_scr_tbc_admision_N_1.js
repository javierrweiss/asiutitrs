/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1FC78DF3-04B0-4CA6-A460-3DCB2D274A71"}
 */
function onRecordSelection_frm_scr_tbc_admision_N(event) {
	globals.vHiscli=foundset.adm_histclin
	globals.vHisclin=foundset.adm_histclin
	globals.vHisclin_edit=globals.vHisclin.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	globals.vApeyNom=foundset.adm_apelnom
	globals.vSexo=foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(foundset.adm_fecing)
	globals.vNameSolucion=application.getSolutionName()
	globals.vFormulario="reimpresor_tab_scr_pacientes"
    if(reimpresor_vhiscli_to_tbc_cirugint.getSize()>0){
		forms.frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}
