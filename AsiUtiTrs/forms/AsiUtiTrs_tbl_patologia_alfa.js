/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48E9BF45-4473-4F04-8195-D69514772EB9"}
 */
function onAction_registro(event){
	
	cerrarForm();
	asiutitrs_rel_tbc_hciti_to_tbc_hciti[globals.AsiUtiTrs_patDataProvider] = foundset.pat_codi;
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	switch (globals.AsiUtiTrs_patDataProvider) {
	case "hitpat1":
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico2.editable=true;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia1=foundset.pat_codi;
		break;
	case "hitpat2":
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=true;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia2=foundset.pat_codi;
		
	break;
	case "hitpat3":
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia3=foundset.pat_codi;
	
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
 * @properties={typeid:24,uuid:"849AC48B-7C20-40D0-9F87-991CFC11F4A8"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"4351EB45-402F-4FF0-B77E-96DE85F7DF1B"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
