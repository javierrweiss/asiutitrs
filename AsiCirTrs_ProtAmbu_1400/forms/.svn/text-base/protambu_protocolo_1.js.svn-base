/**sg)
 * @properties={typeid:35,uuid:"961E8205-97FF-4DCC-BCF6-55557220AC57",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"B586BEC2-22C9-4DEF-A723-3A3653655E16",variableType:-4}
 */
var borrado_ok1 = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB46AD8B-5552-4651-8483-C4CF23E11605"}
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
 * @properties={typeid:24,uuid:"C1DAD26C-E8BB-458B-BB7F-729DF3F55C7D"}
 */
function onAction_protocolo_1(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8302F643-D414-4D97-9EAE-68AA68455D67"}
 */
function onAction_graba_protocolo_1(event) {
	if (globals.proto1!=null&&globals.proto1!=''){
		
		globals.protambu1400_vItemTexto=1
		if (protambu1400_vs_to_tbl_proamb_t.getSize()<1){
			protambu1400_vs_to_tbl_proamb_t.newRecord()
		}
		protambu1400_vs_to_tbl_proamb_t.texto=globals.proto1
		try{
			databaseManager.startTransaction()
			if(databaseManager.saveData(protambu1400_vs_to_tbl_proamb_t)){
				databaseManager.commitTransaction()
			}else{
				var error1 = ''
				var error2 = ''
				var array = databaseManager.getFailedRecords(protambu1400_vs_to_tbl_proamb_t)
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
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
		protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcadescrip=1
		try{
			databaseManager.startTransaction()
			if(databaseManager.saveData(protambu1400_vs_to_tbl_proamb_t)){
				databaseManager.commitTransaction()
			}else{
				var error3 = ''
				var error4 = ''
				var array1 = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_ciruguar)
				for (var j = 0; j < array.length; j++) {
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
				databaseManager.rollbackTransaction()
				if(error3!=''){
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
					plugins.dialogs.showErrorDialog("Error en grabacion",error3,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion ",error4,"Ok")
				}
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			}
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en grabación",msg.message, "Ok")
		}
	}
	elements.btn_graba_diagpreoperatorio.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"766A9538-4F1B-4F2E-8A7D-ECEE76A9D0D7"}
 */
function onAction_ayuda_diag_preoperatorio(event) {
	//globals.textoAyuda='AYUDA-15'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Diagnóstico Pre-operatorio";
	win.setLocation(810,300)
	win.setSize(500,350)
//	win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C452AB71-CB02-4074-A507-9ED6313D74D0"}
 */
function onFocusLost_proto1(event) {
	elements.btn_graba_diagpreoperatorio.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"175EDB8F-510F-46B5-B6AA-C76EC291CC03"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	
}
