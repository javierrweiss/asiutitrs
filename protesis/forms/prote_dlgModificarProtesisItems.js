/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8DDE521-0158-473B-9386-7A3CC49F3B5E"}
 */
var f_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4966FD2E-0A7E-4120-BFC8-F2943EA8EA73"}
 */
var f_laboratorio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB30C8B3-F624-402D-AB95-96BAA2582259"}
 */
var f_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0AD97D1-CE2A-41F5-8632-31F6B2DFB01A",variableType:4}
 */
var f_cantidadRecibida = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55ACC6F4-A223-4F31-B9A0-C92300E7C06E",variableType:4}
 */
var f_esteril = 0;

/**
 * @properties={typeid:35,uuid:"891C32A2-94F1-4476-97D2-A3DB6FA18080",variableType:-4}
 */
var $item = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"63BB2184-EF4F-49EA-AE88-FD59826F27F4"}
 */
var $messageErrorItem = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"40D8BB6B-20AD-47F7-A4C0-45C21B3AF8D2"}
 */
function onAction_btnAgregarItem(event) {
	var item = {};
	item.cantidadRecibida = f_cantidadRecibida;
	item.observacion = f_observacion;
	item.esteril = f_esteril;
	item.laboratorioId = f_laboratorio;
	item.descripcion = f_descripcion;
	item.fecha_recepcion = utils.timestampToDate(application.getServerTimeStamp());
	
	if(isValidItemProtesis(item)){
		//forms.prote_frmRecepcionProtesis.elements.tab_solicitud.tabIndex = 1;			
		
		if($item == null || $item == 'null'){
			forms.prote_tbl_protesisSubItems.foundset.newRecord();
		}
		
		forms.prote_tbl_protesisSubItems.foundset['id'] = null;
		forms.prote_tbl_protesisSubItems.foundset['cantidad'] = item.cantidadRecibida;
		forms.prote_tbl_protesisSubItems.foundset['observacion'] = item.observacion;
		forms.prote_tbl_protesisSubItems.foundset['esteril_value'] = f_esteril;
		forms.prote_tbl_protesisSubItems.foundset['esteril'] = f_esteril;
		forms.prote_tbl_protesisSubItems.foundset['laboratorio'] = f_laboratorio;
		forms.prote_tbl_protesisSubItems.foundset['descripcion'] = item.descripcion;
		forms.prote_tbl_protesisSubItems.foundset['fecha_recepcion'] = item.fecha_recepcion;
		
		databaseManager.saveData(forms.prote_tbl_protesisSubItems.foundset);
		
		if($item == null || $item == 'null'){
			nuevoSubItem();
		}
		else{
			var $name = application.getActiveWindow().getName()
			var $win = application.getWindow($name)
			if($win!=null){
				$win.hide()
				$win.destroy()
			}
		}
		
		forms.prote_frmRecepcionProtesis.$isDirty = true;
	}else{
		var messageError = "No ha sido posible agregar el item recibido. Corrija los siguientes errores y vuelva a intentar." + $messageErrorItem;
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		elements.txt_cantidadRecibida.requestFocus();
	}		
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C674563-EAC5-4E3A-AEAD-BFDCB5D00575"}
 */
function onShow_inicializarForm(firstShow, event) {

	if($item == null || $item == 'null'){
		f_cantidadRecibida = null;
		f_esteril = 0;
		f_observacion = null;
		f_laboratorio = null;
		f_descripcion = null;
	}
	else{
		f_cantidadRecibida = $item.cantidad;
		f_esteril = $item.esteril_value;
		f_descripcion = $item.descripcion;
		f_laboratorio =  $item.laboratorio;
		f_observacion = $item.observacion;
		
	}
	elements.txt_cantidadRecibida.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"EF947B5A-C13A-4500-86F5-A64BCCF6DE67"}
 */
function nuevoSubItem(){
	f_cantidadRecibida = null,
	f_esteril = 0;
	f_laboratorio = null;
	f_observacion = null;
	f_descripcion = null;
	elements.txt_cantidadRecibida.requestFocus();
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"E6628947-48B8-4A98-9C88-AE1DFCD22E17"}
 */
function isValidItemProtesis(data) {
	var valid = true;
	$messageErrorItem = '';
	
	if(data.cantidadRecibida == null || data.cantidadRecibida < 0){
		$messageErrorItem += "\nDebe ingresar cantidad recibida.";
		valid = false;
	}
	
	if(data.descripcion == null ||  utils.stringTrim(data.descripcion) == ""){
		$messageErrorItem += "\nDebe ingresar la descripcion.";
		valid = false;
	}
	
	if(data.laboratorioId == null){
		$messageErrorItem += "\nDebe ingresar el laboratorio.";
		valid = false;
	}

	return valid;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FC9F9E55-3616-4175-8FDD-458AE54906A2"}
 */
function onDataChange_chkEsteril(oldValue, newValue, event) {
	
	return true
}
