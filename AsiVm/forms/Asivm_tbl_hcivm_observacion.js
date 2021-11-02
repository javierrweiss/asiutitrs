/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8897D2A-F842-4570-B696-F214E7F3344A"}
 */
var texto = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3BC5B23C-F4E8-4F5D-877F-856A5238D4E5"}
 */
function onAction_registro(event){
	
	cerrarForm();
		globals.AsiVm_observacion_id = foundset['id'];
		globals.AsiVm_fecha_observacion = foundset['fecha'];
		globals.AsiVm_ficha_id = foundset['idficha'];
		globals.AsiVm_tipo = forms.AsiVm_Ficha_Inicio.f_sin_soporte
		globals.AsiVm_fecha_obs=utils.dateFormat(globals.AsiVm_fecha_observacion,'dd/MM/yyyy hh:mm aa');
//			utils.dateFormat(asivm_buscar_observacion.getRecord(j).fecha,'dd/MM/yyyy hh:mm aa')
	
//	scopes.globals.AsiUcoTrs_hisclin = foundset['id'];
	// mostrar opciones

	//mostrar ficha depende
		var winObs = application.createWindow("observaciones", JSWindow.MODAL_DIALOG);
		winObs.title = 'Observacion';
		winObs.resizable = false;
		winObs.show(forms.AsiVm_Observacion);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8666A078-3829-43A6-B43C-9960253575AF"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"C94BD7BF-6DCE-4EBF-B1B7-A29F79180AB9"}
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
 * @properties={typeid:24,uuid:"BDA038B2-BBC6-4684-A171-3553B832B08A"}
 */
function onShow_inicializarform(firstShow, event) {
	
	elements.btn_seleccionar.requestFocus();
}
