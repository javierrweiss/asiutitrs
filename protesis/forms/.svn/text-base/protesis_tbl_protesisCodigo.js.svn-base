/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25AA18E2-B9E3-49E0-9C08-944CC6E83D03"}
 */
function onAction_registro(event) {

	var protesis = forms.protesis_tbl_protesisCodigo.foundset.mp_codiprot;
	forms.protesis_frm_agregarProtesis.f_codigoProtesis = protesis;
	protesis += ' ' +  forms.protesis_tbl_protesisCodigo.foundset.mp_descripcion;
	forms.protesis_frm_agregarProtesis.f_protesis = protesis.toString().trim();
	
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"19B93460-4937-430C-BF0C-FEF227E7EB09"}
 */
function onFocusGained_registro(event) {
	if(globals.gbl_activoFormBuscarInternado == 1){
		onAction_registro(event)
	}
	else{
		globals.gbl_activoFormBuscarInternado = 1
	}
}
