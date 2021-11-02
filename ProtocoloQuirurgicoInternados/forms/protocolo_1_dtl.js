/**
 * @properties={typeid:35,uuid:"F47F8EFC-ACEC-4823-8E4F-F70893A889CF",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"C54868D0-39AE-4EFA-83BB-B928F41B63EC",variableType:-4}
 */
var borrado_ok1 = false;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DF9EFD9-0FF9-4477-A0C2-94BC04D60BC7"}
 */
function onShow_proto1(firstShow, event) {
	elements.btn_graba_diagpreoperatorio.visible=true
	elements.proto1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE728F46-B015-4555-ACA2-0F773F38CE85"}
 */
function onAction_protocolo_1(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"59C94C95-CDF7-465B-8267-F355416551B9"}
 */
function onAction_graba_protocolo_1(event) {
	if (globals.proto1!=null&&globals.proto1!=''){
		/*
		forms.protocolo_1_dtl.sub_borrado()
		application.sleep(200)
		globals.GrabarTexto(globals.vNroProtocolo,1,globals.proto1)
		*/
		globals.vItemTexto=1
		if (vs_to_tbl_protoc_txt.getSize()<1){
			vs_to_tbl_protoc_txt.newRecord()
		}
		vs_to_tbl_protoc_txt.texto=globals.proto1
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
	elements.btn_graba_diagpreoperatorio.visible=false
	//forms.Protocolo_dtl.elements.tabs_10.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99DFDCD2-8C99-4E49-BB28-00A9C6AF0613"}
 */
function onAction_ayuda_diag_preoperatorio(event) {
	globals.textoAyuda='AYUDA-15'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Diagnóstico Pre-operatorio";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F5AE659-636C-4291-AE4F-0B84F0ABC2C5"}
 */
function onFocusLost_proto1(event) {
	elements.btn_graba_diagpreoperatorio.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"82703D79-D502-4A39-B132-9741A22CED92"}
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
	fs1[name[1]] = 1
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
	fs1[name[1]] = 1
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
