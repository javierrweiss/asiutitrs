/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4B50EF4-AC92-434C-AF42-76A381368ACB"}
 */
var $id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD0C03BE-CDA2-4560-B1C0-2C878B2D614F"}
 */
var f_observacionNov = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8E1A62D-D122-472D-94D3-3B4645F4163E",variableType:4}
 */
var f_tipoNovedad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B04B00AD-67A0-4FE6-A0FE-74045D9B2997",variableType:4}
 */
var f_cantidadNovedad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"407F0FEF-A1FE-40A9-88E8-D31B19BB28EE"}
 */
var f_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F04B497A-AB11-418E-BABB-85C160C9716F"}
 */
var f_laboratorio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62CCE0C3-7F0D-4DED-899F-7723ED94A943"}
 */
var f_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"775C2EF9-E7C9-46D2-88BA-395A5C357AC5",variableType:4}
 */
var f_cantidadRecibida = null;

/**
 * @properties={typeid:35,uuid:"AA2CE4DC-4705-4A44-9BF3-E43FC699F8B5",variableType:-4}
 */
var f_esteril = false;

/**
 * @properties={typeid:35,uuid:"9619396B-512E-41C9-84E8-F4B936440A34",variableType:-4}
 */
var $item = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F11B066-69C0-486B-8782-CBBE1CCB8A71"}
 */
var $messageErrorItem = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EF9A9B20-792A-4EBE-8CB8-8D36AD8D3286"}
 */
function onAction_btnAgregarNovedad (event) {
	
	var item = {};
	item.cantidad = f_cantidadNovedad;
	item.descripcion = f_descripcion;
	item.tipoNovedad = f_tipoNovedad;
	item.observacion = f_observacionNov;
	item.fechaNovedad = utils.timestampToDate(application.getServerTimeStamp());
	
	if(isValidItemNovedad(item)){
		
		$id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id FROM prote_item_novedades WHERE id='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id FROM prote_item_novedades WHERE id='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
		}
		
		var $fs_novedad = databaseManager.getFoundSet("desal","prote_item_novedades");
		
		$fs_novedad.newRecord();
		$fs_novedad['id'] = $id;
		$fs_novedad['item_recibido_id'] = $item.id;
		$fs_novedad['cantidad'] = item.cantidad;
		//$fs_novedad['descripcion'] = item.descripcion;
		$fs_novedad['observacion'] = item.observacion;
		$fs_novedad['fecha_novedad'] = item.fechaNovedad;
		$fs_novedad['tipo_novedad'] = item.tipoNovedad;
		$fs_novedad['leg_operador'] = globals.vLega;
		$fs_novedad['fecha_creacion'] = application.getServerTimeStamp();
		
		databaseManager.startTransaction()
		var result = databaseManager.saveData();
		if(result){
			databaseManager.commitTransaction();
			globals.DIALOGS.showInfoDialog("Resultado","La novedad se guardo correctamente.","Aceptar");
			
			// Actualizando tbl item de novedades
			forms.prote_tbl_protesisNovedadItem.$itemRecibidoId = $item.id;
			forms.prote_tbl_protesisNovedadItem.loadDataForm();
			
			nuevoSubItem();
		}
		else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					var thrown = record.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			databaseManager.rollbackTransaction()
			if(error1!=''){
				globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
				globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
			}
			globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
		}
		
	}else{
		var messageError = "No ha sido posible agregar la novedad. Corrija los siguientes errores y vuelva a intentar." + $messageErrorItem;
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		elements.cbo_tipoNovedad.requestFocus();
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5922F0C5-9F95-42F0-805B-4E04C24D5A5C"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	f_cantidadNovedad = null;
	f_tipoNovedad = null;
	f_observacionNov = null;
		
	f_cantidadRecibida = $item.cantidad;
	f_esteril = $item.esteril;
	f_descripcion = $item.descripcion;
	f_laboratorio =  $item.laboratorio;
	f_observacion = $item.observacion;
	
	elements.cbo_tipoNovedad.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"7B005B89-842F-4C98-9319-D7450B4EEA85"}
 */
function nuevoSubItem(){
	f_cantidadNovedad = null,
	f_tipoNovedad = null;
	f_observacionNov = null;
	elements.cbo_tipoNovedad.requestFocus();
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"FD3F4934-E14B-4A39-AC48-7F5C281AEF88"}
 */
function isValidItemNovedad(data) {
	var valid = true;
	$messageErrorItem = '';
	
	if(data.tipoNovedad == null){
		$messageErrorItem += "\nDebe seleccionar tipo de novedad.";
		valid = false;
	}
	
	if(data.cantidad == null || data.cantidad < 0){
		$messageErrorItem += "\nDebe ingresar cantidad.";
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
 * @properties={typeid:24,uuid:"22CA4176-8285-4C57-B838-93026A5F982E"}
 */
function onAction_cboTipoNovedad(event) {
	
	elements.txt_cantidad.requestFocus();
}
