/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0EBD831D-020C-4A13-B9F7-911EBF755886"}
 */
function onAction_registro(event){
	
	cerrarForm();
	
	asiutitrs_rel_tbc_hojati_to_tbc_hojati[globals.AsiUtiTrs_Hoja_patDataProvider] = foundset.pat_codi;
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	switch (globals.AsiUtiTrs_Hoja_patDataProvider) {
	case "htidiagnos1":
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.elements.txt_diagnostico2.editable=true;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia1=foundset.pat_codi;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_descripcion_patologia1 = foundset.pat_descrip
		break;
	case "htidiagnos2":
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.elements.txt_diagnostico3.editable=true;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia2=foundset.pat_codi;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_descripcion_patologia2 = foundset.pat_descrip
		break;
	case "htidiagnos3":
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia3=foundset.pat_codi;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_descripcion_patologia3 = foundset.pat_descrip
		break;
	case "htidiagevo1":
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.elements.txt_diagnostico2.editable=true;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia1=foundset.pat_codi;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_descripcion_patologia1 = foundset.pat_descrip
		break;
	case "htidiagevo2":
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia2=foundset.pat_codi;
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_descripcion_patologia2 = foundset.pat_descrip
//		validarPatologia(f_patologia1,'htidiagevo1');
//		validarPatologia(f_patologia2,'htidiagevo2');
		break;
	default:
		break;
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA5993AE-4A3F-497A-8359-F9DECDF1581D"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"105F7D14-812B-4444-AACF-F33652A497F1"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
