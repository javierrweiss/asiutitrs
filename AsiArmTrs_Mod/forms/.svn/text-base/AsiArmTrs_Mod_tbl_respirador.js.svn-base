/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC3A0AB5-DAD8-4A40-89A2-0A19214428B5"}
 */
function onAction_registro(event) {

	if(asiarmtrs_mod_rel_respirador.getSize() > 0){
		
		var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Esta seguro que desa modificar el respirador?', 'Si', 'No');
		if(res == 'Si'){
			globals.AsiArmTrs_Mod_rspCodInt = foundset.rsp_codint;
			globals.AsiArmTrs_Mod_rspCodSeq = foundset.rsp_codseq;
			forms.AsiArmTrs_Mod_frm_arm_dia.$isDirty = true;
		}
	}
	else{
		globals.AsiArmTrs_Mod_rspCodInt = foundset.rsp_codint;
		globals.AsiArmTrs_Mod_rspCodSeq = foundset.rsp_codseq;
		forms.AsiArmTrs_Mod_frm_arm_dia.$isDirty = true;
	}
	
	cerrarForm();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98CD01DB-790B-4B79-BF1E-BD05176E0752"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"0C5F831C-63F3-4535-BC25-E79CE934D055"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
