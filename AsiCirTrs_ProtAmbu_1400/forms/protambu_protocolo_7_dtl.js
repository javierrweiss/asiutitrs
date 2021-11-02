/**
 * @properties={typeid:35,uuid:"3D73CC4B-31A0-4AF2-9C7F-0FAFB90DE14E",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"2DF09FB3-1FC0-4EAD-AD22-CE03EDAF9042",variableType:-4}
 */
var borrado_ok1 = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EECEF48-2AE6-4902-8DD6-DB159B232F29"}
 */
function onAction_graba_protocolo_7(event) {
	var error1 = ''
	var error2 = ''
	var array = null;
	var i = 0;
	var record = null;
	var jstable = null;
	var tableSQLName = null;
	var thrown = null;
	if (globals.proto7!=null&&globals.proto7!=''){
		/*
		forms.protocolo_7_dtl.sub_borrado()
		globals.GrabarTexto(globals.vNroProtocolo,7,globals.proto7)
		*/
		globals.protambu1400_vItemTexto=5
		if (protambu1400_vs_to_tbl_proamb_t.getSize()<1){
			protambu1400_vs_to_tbl_proamb_t.newRecord()
		}
		protambu1400_vs_to_tbl_proamb_t.texto=globals.proto7
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
		
		protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcaimplan=1
		
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
					plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
				}
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			}
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
	}
	elements.btn_graba_protesis_explantada.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76F64C80-BBBB-4DCF-8384-8AEC22DACA7E"}
 */
function onShow_proto7(firstShow, event) {
	elements.btn_graba_protesis_explantada.visible=true
	controller.focusFirstField()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5128E07-2AD0-46A0-BFC1-F70C13104A24"}
 */
function onFocusLost_proto7(event) {
	elements.btn_graba_protesis_explantada.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"FCE7CEEF-F42D-49F8-A6CD-5829F43B5976"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	
}
