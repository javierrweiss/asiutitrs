/**
 * @properties={typeid:35,uuid:"3A2B088B-639C-4EF5-8CAB-DCA484AD7DC0",variableType:-4}
 */
var $item = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC9A2DD2-4352-4729-8EAD-5DE7E01949C8"}
 */
var $messageErrorItem = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1152B57E-C10F-4938-8E41-CA95DE64CFA1"}
 */
var f_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"119B0408-FC4E-4AF4-AC2A-5DAEB51BB781"}
 */
var f_detalle = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF4C0CC6-F20B-468D-A085-9E05F392C336",variableType:4}
 */
var f_cantidad = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4763735E-0510-4C05-9EB5-09ACD6CCC71A"}
 */
function onAction_btnAgregarItem(event) {
	var item = {};
	item.codigo = f_codigo;
	item.detalle = f_detalle;
	item.cantidad = f_cantidad;
	
	if(isValidItemProtesis(item)){
		forms.frm_protesis.elements.tabless.tabIndex = 1;
		//visibleElementsItem(false);
		
		if(globals.gbl_protesisNuevoItem){
			forms.protesis_lst_protesis.foundset.newRecord();
		}
		
		forms.protesis_lst_protesis.foundset['codigo'] = item.codigo;
		forms.protesis_lst_protesis.foundset['detalle'] = item.detalle;
		forms.protesis_lst_protesis.foundset['cantidad'] = item.cantidad;
		databaseManager.saveData(forms.protesis_lst_protesis.foundset);
		
		limpiarForm();
	}
	else{
		var messageError = "No ha sido posible agregar la protesis. Corrija los siguientes errores y vuelva a intentar." + $messageErrorItem;
		globals.DIALOGS.showWarningDialog("Atención",messageError,"Aceptar")
		forms.protesis_frm_agregarProtesis.elements.txt_protesis.requestFocus();
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param data
 *
 * @properties={typeid:24,uuid:"E724B935-A587-460C-8D17-2533AF179E4D"}
 */
function isValidItemProtesis(data) {
	var valid = true;
	$messageErrorItem = '';
	if(data.detalle == null || data.detalle == ''){
		$messageErrorItem += "\nDebe ingresar el detalle.";
		valid = false;
	}
	
	if(data.cantidad == null || data.cantidad < 1){
		$messageErrorItem += "\nLa cantidad debe ser mayor o gual 1.";
		valid = false;
	}
	
	return valid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"54F40655-3D2B-4C32-84BC-CD2D58058AC6"}
 */
function onAction_btnCancelartItem(event) {
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
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
 * @properties={typeid:24,uuid:"2BF63896-7F20-4986-896D-7A654F337646"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	if(globals.gbl_protesisNuevoItem == true){
		f_cantidad = null;
		f_codigo = '';
		f_detalle = '';
	}
	else{
		f_cantidad = $item.cantidad;
		f_codigo = $item.codigo;
		f_detalle = $item.detalle;
	}
	elements.txt_codigo.requestFocus();
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"7DB6FB09-FEF7-464D-B937-F934655ABAA5"}
 */
function limpiarForm() {
	f_cantidad = null;
	f_codigo = '';
	f_detalle = '';
	elements.txt_codigo.requestFocus();
}
