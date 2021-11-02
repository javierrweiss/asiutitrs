/**
 * @properties={typeid:35,uuid:"8E17766A-74BA-491A-B868-43B02DA01CE4",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"54020F52-6515-40BA-9B21-8185B8928E76",variableType:-4}
 */
var borrado_ok1 = false;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1DB735B0-C45B-4ED2-B234-245F9F43F5C5"}
 */
function onShow_protocolo_9_dtl(firstShow, event) {
	if (foundset.ciriintensi>0){
		elements.proto9.enabled=true
	}else{
		elements.proto9.enabled=false
	}
	elements.btn_graba_intesificador.visible=true
	controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2217C560-054A-48BD-8F42-434D97E35DF3"}
 */
function onAction_cantidad(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Técnico del Arco en C";
	win.setSize(565,257)
	globals.vLegajoTecnico=0
	globals.vLegaTecnico=0
	globals.vOperadorTecnico=''
	globals.vClaveTecnico=0
	win.show(forms.PideLegajoTecnico)
	foundset.cirilegatecnico=globals.vLegaTecnico
	foundset.ciritipotecnico=globals.vTipoOperadorTecnico
	elements.proto9.requestFocus()
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
 * @properties={typeid:24,uuid:"71643D0E-9452-499C-BF2A-5BD848B1BCCD"}
 */
function onDataChange_cantidad(oldValue, newValue, event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Técnico del Arco en C";
	win.setSize(570,260)
	globals.vLegajoTecnico=0
	globals.vLegaTecnico=0
	globals.vOperadorTecnico=''
	globals.vClaveTecnico=0
	globals.vIngresoTecnico=false;
	win.show(forms.PideLegajoTecnico)
	win.hide()
	if(globals.vIngresoTecnico){
		foundset.cirilegatecnico=globals.vLegaTecnico
		foundset.ciritipotecnico=globals.vTipoOperadorTecnico
		if(foundset.ciriintensi>0){
			elements.proto9.enabled=true
			elements.proto9.requestFocus()
		}else{
			elements.proto9.enabled=false
		}
		return true
	}else{
		return false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D1684D9-685B-4274-BDB0-B431B6BF7CCD"}
 */
function onAction_graba_protocolo_9(event) {
	try{
		databaseManager.saveData(forms.protocolo_9_dtl.foundset.getRecord(1))
		var error3 = ''
		var error4 = ''
		var array1 = databaseManager.getFailedRecords(forms.protocolo_9_dtl.foundset)
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
	var error1=''
	var error2=''
	var array = databaseManager.getFailedRecords(forms.protocolo_9_dtl.foundset)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
	// exception thrown in pre-insert/update/delete event method
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if (globals.proto9!=null&&globals.proto9!=''){
		/*
		forms.protocolo_9_dtl.sub_borrado()
		globals.GrabarTexto(globals.vNroProtocolo,9,globals.proto9)
		*/
		globals.vItemTexto=9
		if (vs_to_tbl_protoc_txt.getSize()<1){
			vs_to_tbl_protoc_txt.newRecord()
		}
		vs_to_tbl_protoc_txt.texto=globals.proto9
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
	elements.btn_graba_intesificador.visible=false
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B367EFC0-4A03-4CCB-926F-106DF1F6A181"}
 */
function onFocusLost_proto9(event) {
	elements.btn_graba_intesificador.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"CC684748-B639-4745-8FED-4042DE79EC92"}
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
	fs1[name[1]] = 9
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
	fs1[name[1]] = 9
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
