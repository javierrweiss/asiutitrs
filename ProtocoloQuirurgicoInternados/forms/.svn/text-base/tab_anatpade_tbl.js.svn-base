
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B0B7359-39D0-4B10-8E4B-DB76A9B067A0"}
 */
function onRecordSelection_tab_anatpade_tbl(event) {
	if(forms.tab_anatpade_tbl.apde_observa==1){
		globals.vNroSolicitud=forms.tab_anatpade_tbl.apde_nrosolic
		globals.vCodNome=forms.tab_anatpade_tbl.apde_codnom
		//globals.anatpaob1=forms.IngresoAnatomia_tab.MostrarTextoAnatomiaPatologica(forms.tab_anatpade_tbl.foundset.apde_nrosolic, forms.tab_anatpade_tbl.foundset.apde_codnom)
		forms.IngresoAnatomia_tab.MostrarTextoConRelacion()
	}else{
		globals.anatpaob1=''
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBDFA247-51C6-40B2-9FEC-F8B01B50107A"}
 */
function onShow_tab_anatpade_tbl(firstShow, event) {
	forms.IngresoAnatomia_tab.controller.focusFirstField()
}
