/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7CF18763-4AF7-4335-9775-F0A8D7937B74"}
 */
function onAction_registro(event){
	
	cerrarForm();
	globals.Hcipiso_fechaHciint = foundset.hiifecha;
	globals.Hcipiso_horaHciint = foundset.hiihora;
	forms.Hcipiso_frm_hist_clin_ingreso_piso.loadHciint();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D57E55E-8C37-41E0-B055-CD7F867481A4"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"A3B27748-D204-47EE-AE3A-25504ECB5B0B"}
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
 * @properties={typeid:24,uuid:"A059E702-5909-484F-B226-3B4359E0AA97"}
 */
function onShow_inicializarform(firstShow, event) {
	
	elements.btn_seleccionar.requestFocus();
}
