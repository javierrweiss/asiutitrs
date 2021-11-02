/**
 * @properties={typeid:35,uuid:"89D7CB4B-51CB-410B-9CAA-56EB71A199A2",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"610FC86D-80B3-4A60-9481-6F9D71C8A6BB",variableType:-4}
 */
var borrado_ok1 = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E7FFF49-0A83-4FAA-9B3C-5D6C28656F5E"}
 */
function onShow_protocolo_9_dtl(firstShow, event) {
	if (foundset.cirgintensi>0){
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
 * @properties={typeid:24,uuid:"8EA5B08C-6BD9-49E0-81EF-4DB7E29C183A"}
 */
function onAction_cantidad(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Técnico del Arco en C";
	win.setSize(565,257)
	globals.protambu1400_vLegajoTecnico=0
	globals.protambu1400_vLegaTecnico=0
	globals.protambu1400_vOperadorTecnico=''
	globals.protambu1400_vClaveTecnico=0
	win.show(forms.protambu_PideLegajoTecnico)
	foundset.cirglegatecnico=globals.protambu1400_vLegaTecnico
	foundset.cirgtipotecnico=globals.protambu1400_vTipoOperadorTecnico
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
 * @properties={typeid:24,uuid:"0FECBB4E-6D84-4653-AF74-7B83B3D92A4F"}
 */
function onDataChange_cantidad(oldValue, newValue, event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Técnico del Arco en C";
	win.setSize(570,260)
	globals.protambu1400_vLegajoTecnico=0
	globals.protambu1400_vLegaTecnico=0
	globals.protambu1400_vOperadorTecnico=''
	globals.protambu1400_vClaveTecnico=0
	globals.protambu1400_vIngresoTecnico=false;
	win.show(forms.protambu_PideLegajoTecnico)
	if(globals.protambu1400_vIngresoTecnico){
		foundset.cirglegatecnico=globals.protambu1400_vLegaTecnico
		foundset.cirgtipotecnico=globals.protambu1400_vTipoOperadorTecnico
		if(foundset.cirgintensi>0){
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
 * @properties={typeid:24,uuid:"D342E62C-E022-44F2-B876-463785516C58"}
 */
function onAction_graba_protocolo_9(event) {
	var error1 = ''
	var error2 = ''
	var array = null;
	var i = 0;
	var record = null;
	var jstable = null;
	var tableSQLName = null;
	var thrown = null;
	if (globals.proto9!=null&&globals.proto9!=''){
		
		globals.protambu1400_vItemTexto=6
		if (protambu1400_vs_to_tbl_proamb_t.getSize()<1){
			protambu1400_vs_to_tbl_proamb_t.newRecord()
		}
		protambu1400_vs_to_tbl_proamb_t.texto=globals.proto9
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
		
		foundset.cirgmarcaintensi=1
		try{
			databaseManager.startTransaction()
			if(databaseManager.saveData(foundset)){
				databaseManager.commitTransaction()
			}else{
				error1 = ''
				error2 = ''
				array = databaseManager.getFailedRecords(foundset)
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
	elements.btn_graba_intesificador.visible=false
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44CDEDF8-86D4-4C7E-A58C-CDACA281C0B3"}
 */
function onFocusLost_proto9(event) {
	elements.btn_graba_intesificador.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"CE388170-C511-4C72-9774-1FE809AD6EDF"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	
}
