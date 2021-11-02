/**
 * @properties={typeid:35,uuid:"08942BAF-3C06-4DD1-A235-D24F237EE4D4",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"299BEA85-7532-4683-B976-DFB9584642D3",variableType:-4}
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
 * @properties={typeid:24,uuid:"D9F22360-4348-4D98-8751-C31D8416FBE8"}
 */
function onDataChange_Texto_Standard(oldValue, newValue, event) {
	if(newValue=='Si'){
		globals.proto5='El paciente mantuvo ritmo sinusal durante todo el procedimiento y no presento arritmias ni alteraciones hemodinamicas.'
	}
	elements.btn_graba_monitoreo.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4431CE3-720A-445F-9606-C9633A7DD9F2"}
 */
function onAction_Texto_Standard(event) {
	if(globals.vMonitoSiNo=='Si'){
		globals.proto5='El paciente mantuvo ritmo sinusal durante todo el procedimiento y no presento arritmias ni alteraciones hemodinamicas.'
	}
	elements.btn_graba_monitoreo.visible=true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87B2D146-1AD3-4417-847E-375E5B2592B1"}
 */
function onAction_graba_protocolo_5(event) {
	try{
		databaseManager.saveData(forms.protocolo_5_dtl.foundset.getRecord(1))
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	if (globals.proto5!=null&&globals.proto5!=''){
		/*
		forms.protocolo_5_dtl.sub_borrado()
		globals.GrabarTexto(globals.vNroProtocolo,5,globals.proto5)
		*/
		globals.vItemTexto=5
		if (vs_to_tbl_protoc_txt.getSize()<1){
			vs_to_tbl_protoc_txt.newRecord()
		}
		vs_to_tbl_protoc_txt.texto=globals.proto5
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
	elements.btn_graba_monitoreo.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A2E4DCB-A201-4D99-8638-86F1CF11E865"}
 */
function onShow_proto5(firstShow, event) {
	elements.btn_graba_monitoreo.visible=true
	controller.focusFirstField()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E50234C-2B24-4647-A5E8-B786198DB670"}
 */
function onFocusLost_proto5(event) {
	elements.btn_graba_monitoreo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"EB4FD1E1-3B5A-485A-86E6-5163C36CE198"}
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
	fs1[name[1]] = 5
	fs1[name[2]] = 1
	fs1.search()	
	  
	var tamanio = 0;
	tamanio = fs1.getSize();

	if (tamanio > 0) {
		borrado_ok1 = fs1.deleteAllRecords()
		if(!borrado_ok1){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto anterior","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,-1)
		}
	}
	fs1.find()
	fs1[name[0]] = globals.vNroProtocolo
	fs1[name[1]] = 5
	fs1[name[2]] = 0
	fs1.search()
	var filascab = fs1.getSize()
	if (filascab > 0) {
		borrado_ok2 = fs1.deleteAllRecords()
		if(!borrado_ok2){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto Cabecera","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,1)
		}
	}
}
