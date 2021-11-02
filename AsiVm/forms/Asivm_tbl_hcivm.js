/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"869E0062-7F40-481F-B443-35DBD565D69F"}
 */
var texto = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D32BB3AF-CA1D-483A-BEFE-A44800848DC9"}
 */
function onAction_registro(event){
	
	cerrarForm();
		globals.AsiVm_monitoreo_id = foundset['id'];
		globals.AsiVm_fecha_monitoreo = foundset['fecha'];
		globals.AsiVm_ficha_id = foundset['idficha'];
	
//	scopes.globals.AsiUcoTrs_hisclin = foundset['id'];
	// mostrar opciones

	//mostrar ficha depende
	forms.AsiVm_Monitoreo.loadData();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61943CC6-C0B9-4FA3-8CC4-F72532A6B285"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"C56619BA-8E73-4BD4-887F-146DF73875D7"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EBBE789-E360-47BB-90B3-C3667890E85D"}
 */
function onShow_inicializarform(firstShow, event) {
	
	elements.btn_seleccionar.requestFocus();
}
