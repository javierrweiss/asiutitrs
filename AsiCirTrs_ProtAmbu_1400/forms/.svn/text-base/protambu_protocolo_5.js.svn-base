/**
 * @properties={typeid:35,uuid:"1CA76FFE-1D09-4DCF-A76B-AED8DFF949C4",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"F9592765-7958-4876-9BA6-2850B93FB8A4",variableType:-4}
 */
var borrado_ok1 = false;

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5FB98A14-8284-4737-A2D2-7085803E50E7"}
 */
function onDataChange_Texto_Standard(oldValue, newValue, event) {
	if(newValue=='Si'){
		globals.proto5='El paciente mantuvo ritmo sinusal durante todo el procedimiento y no presento arritmias ni alteraciones hemodinamicas.'
	}else{
		globals.proto5=' '
	}
	elements.btn_graba_monitoreo.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3531E5D4-461A-445E-87FC-E7A3AA5ABF18"}
 */
function onAction_Texto_Standard(event) {
	if(globals.protambu1400_vMonitoSiNo=='Si'){
		globals.proto5='El paciente mantuvo ritmo sinusal durante todo el procedimiento y no presento arritmias ni alteraciones hemodinamicas.'
	}else{
		globals.proto5=' '
	}
	elements.btn_graba_monitoreo.visible=true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0379AEDC-2BBC-4126-B56F-E26AEF6DBC95"}
 */
function onAction_graba_protocolo_5(event) {
	if (globals.proto5!=null&&globals.proto5!=''){
		globals.protambu1400_vItemTexto=3
		if (protambu1400_vs_to_tbl_proamb_t.getSize()<1){
			protambu1400_vs_to_tbl_proamb_t.newRecord()
		}
		protambu1400_vs_to_tbl_proamb_t.texto=globals.proto5
		protambu1400_vs_to_tbl_proamb_t.linea_cab=globals.protambu1400_responsableMonitoreo
		var error1 = ''
		var error2 = ''
		var array = null;
		var i = 0;
		var record = null;
		var jstable = null;
		var tableSQLName = null;
		var thrown = null;
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
		
		protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcamonito=1
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
					plugins.dialogs.showErrorDialog("Error en grabacion",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion",error2,"Ok")
				}
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			}
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
	}
	elements.btn_graba_monitoreo.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6B28D75-F49D-4F07-8743-BB43FB176B50"}
 */
function onShow_proto5(firstShow, event) {
	globals.protambu1400_vMonitoSiNo=null
	elements.btn_graba_monitoreo.visible=true
	controller.focusFirstField()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E1CA3A8A-081A-44AE-AA47-CF3DBFEF8CD0"}
 */
function onFocusLost_proto5(event) {
	elements.btn_graba_monitoreo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"7C5D772D-6599-427B-8091-60320455958E"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	
}
