/**
 * @properties={typeid:35,uuid:"E8ACEC35-BFF4-4BD4-B04B-E6644BDDF2FA",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"5CD7BAE9-5B85-42D1-9AA9-96C83F894039",variableType:-4}
 */
var borrado_ok1 = false;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1CE234F-6FC2-492A-A57B-712445827041"}
 */
function onAction_graba_protocolo_8(event) {
	try{
		databaseManager.saveData(forms.protocolo_8_dtl.foundset.getRecord(1))
		var error3 = ''
		var error4 = ''
		var array1 = databaseManager.getFailedRecords(forms.protocolo_8_dtl.foundset)
		for (var j = 0; j < array1.length; j++) {
			var record1 = array1[j];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			plugins.dialogs.showErrorDialog("Error en grabacion",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	if (globals.proto8!=null&&globals.proto8!=''){
		/*
		forms.protocolo_8_dtl.sub_borrado()
		globals.GrabarTexto(globals.vNroProtocolo,8,globals.proto8)
		*/
		globals.vItemTexto=8
		if (vs_to_tbl_protoc_txt.getSize()<1){
			vs_to_tbl_protoc_txt.newRecord()
		}
		vs_to_tbl_protoc_txt.texto=globals.proto8
		databaseManager.startTransaction()
		if(databaseManager.saveData(vs_to_tbl_protoc_txt)){
			databaseManager.commitTransaction()
		}else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords(vs_to_tbl_protoc_txt)
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
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
			}
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
	}
	elements.btn_graba_perfusionista.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F836A94A-8E82-427A-B770-4B366D8CD0CA"}
 */
function onShow_proto8(firstShow, event) {
	elements.btn_graba_perfusionista.visible=true
	controller.focusFirstField()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"886E69B3-37A8-4C72-A465-DA835C9BFB84"}
 */
function onFocusLost_proto8(event) {
	elements.btn_graba_perfusionista.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"931E9E36-3D15-41D2-8E56-321793074CD4"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	borrado_ok1=false
	borrado_ok2=false
	
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protoc_txt")
	
	var name = new Array()
	name[0] = "protxt_protocolo"
	name[1] = "protxt_grupo"
	name[2] = "protxt_nro1"
	name[3] = "protxt_secuen"
	name[4] = "protxt_linea"
	name[5] = "protxt_tope"
 
	fs1.find()
	fs1[name[0]] = globals.vNroProtocolo
	fs1[name[1]] = 8
	fs1[name[2]] = 1
	fs1.search()	
	  
	var tamanio = 0;
	tamanio = fs1.getSize();

	if (tamanio > 0) {
		borrado_ok1 = fs1.deleteAllRecords()
		if(!borrado_ok1){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto anterior","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		}else{
			databaseManager.refreshRecordFromDatabase(fs1,-1)
		}
	}
	fs1.find()
	fs1[name[0]] = globals.vNroProtocolo
	fs1[name[1]] = 8
	fs1[name[2]] = 0
	fs1.search()
	var filascab = fs1.getSize()
	if (filascab > 0) {
		borrado_ok2 = fs1.deleteAllRecords()
		if(!borrado_ok2){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto Cabecera","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		}else{
			databaseManager.refreshRecordFromDatabase(fs1,1)
		}
	}
}
