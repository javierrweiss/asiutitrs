/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6AFF3674-7BD0-4A78-9467-71D2D152321B"}
 */
var texto = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D3A1288-587D-48D7-A5A3-DA2F9E7F0DF8"}
 */
function onAction_registro(event){
	
	cerrarForm();
	globals.AsiUcoTrs_hiuFecha = foundset['fecha'];
	globals.AsiUcoTrs_hiuHora = foundset['hora'];
	globals.AsiUcoTrs_hiuHisCli = foundset['id'];
	forms.AsiUcoTrs_frm_hciuco.loadData();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C9B2FEF-890B-4A70-880D-D4AB0EE9BA37"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"E63B3432-9EA6-4CD4-BD69-6461A93E70E5"}
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
 * @properties={typeid:24,uuid:"55051C54-B5DD-4987-A09E-52A2316E56F4"}
 */
function onShow_inicializarform(firstShow, event) {
	
	elements.btn_seleccionar.requestFocus();
}
