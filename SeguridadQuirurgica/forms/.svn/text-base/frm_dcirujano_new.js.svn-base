/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74B5B7A9-5770-4714-B348-109B7C7052B5"}
 * @AllowToRunInFind
 */
function onShowDCirujano(firstShow, event){
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.frm_dcirujano_new.foundset.find()
	forms.frm_dcirujano_new.foundset.segtipohc = 0
	forms.frm_dcirujano_new.foundset.seghistclinica  = globals.vhiscli
	forms.frm_dcirujano_new.foundset.segprotocolo = globals.vprotocolo
	forms.frm_dcirujano_new.foundset.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A77F5B7D-3711-4F2F-9A2F-007ED702C64B"}
 */
function GrabaDCirujano(event) {
	forms.frm_dcirujano_new.foundset.segtipocirufin  = forms.frm_dcirujano_new.foundset.segtipociruini
	forms.frm_dcirujano_new.foundset.seglegacirufin = forms.frm_dcirujano_new.foundset.seglegaciruini
	
	
	databaseManager.saveData(forms.frm_dcirujano_new.foundset.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_dcirujano_new.foundset)
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
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
	}
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_dcirujano_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}
