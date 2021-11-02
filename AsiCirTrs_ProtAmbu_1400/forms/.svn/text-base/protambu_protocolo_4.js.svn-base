/**
 * @properties={typeid:35,uuid:"32BE4D53-3FF5-42B0-BBEB-A4F9D2A4972D",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"F930E20D-946D-4B33-9788-0B02DF8ED25A",variableType:-4}
 */
var borrado_ok1 = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB1EBAF2-5585-4195-9FCC-DF9D343780FA"}
 */
function onAction_graba_protocolo_4(event) {
	if (globals.proto4!=null&&globals.proto4!=''){
		globals.protambu1400_vItemTexto=2
		if (protambu1400_vs_to_tbl_proamb_t.getSize()<1){
			protambu1400_vs_to_tbl_proamb_t.newRecord()
		}
		if(globals)
		var error1 = ''
		var error2 = ''
		var array = null;
		var i = 0;
		var record = null;
		var jstable = null;
		var tableSQLName = null;
		var thrown = null;
		protambu1400_vs_to_tbl_proamb_t.texto=globals.proto4
		protambu1400_vs_to_tbl_proamb_t.linea_cab=globals.protambu1400_responsableHemoterapia
		try{
			databaseManager.startTransaction()
			if(databaseManager.saveData(protambu1400_vs_to_tbl_proamb_t)){
				databaseManager.commitTransaction()
			}else{
				error1 = ''
				error2 = ''
				array = databaseManager.getFailedRecords(protambu1400_vs_to_tbl_proamb_t)
				for (i = 0; i < array.length; i++) {
					record = array[i];
					jstable = databaseManager.getTable(record);
					tableSQLName = jstable.getSQLName();
					error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
					error2='Error en grabación '+record.exception;
					if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
						 thrown = record.exception.getValue()
						//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					}
				}
				databaseManager.rollbackTransaction()
				if(error1!=''){
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
				}
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			}
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
		protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcahemote=1
		try{
			databaseManager.startTransaction()
			if(databaseManager.saveData(protambu1400_vhiscli_to_tbc_ciruguar)){
				databaseManager.commitTransaction()
			}else{
				error1 = ''
				error2 = ''
				array = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_ciruguar)
				for (i = 0; i < array.length; i++) {
					record = array[i];
					jstable = databaseManager.getTable(record);
					tableSQLName = jstable.getSQLName();
					error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
					error2='Error en grabación '+record.exception;
					if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
						 thrown = record.exception.getValue()
						//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					}
				}
				databaseManager.rollbackTransaction()
				if(error1!=''){
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					plugins.dialogs.showErrorDialog("Error en grabacion ",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion ",error2,"Ok")
				}
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			}
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
	}
	elements.btn_graba_hemoterapia.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9A1EAC4-EEA8-4D6E-A9BD-DB417D4F861D"}
 */
function onShow_proto4(firstShow, event) {
	elements.btn_graba_hemoterapia.visible=true
	controller.focusFirstField()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA6B03A7-7F7A-4D2B-8E62-FB7372C8A4AA"}
 */
function onFocusLost_proto4(event) {
	elements.btn_graba_hemoterapia.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"6C41D1EC-8BD8-4E7C-8C77-67C04C912D49"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	
}
