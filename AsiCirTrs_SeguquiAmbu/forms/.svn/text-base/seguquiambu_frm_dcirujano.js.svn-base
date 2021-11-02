/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A32EADB9-9BB4-48D9-8EA0-CC789C948574"}
 * @AllowToRunInFind
 */
function onShowDCirujano(firstShow, event){
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.seguquiambu_frm_dcirujano.foundset.find()
	forms.seguquiambu_frm_dcirujano.foundset.segtipohc = 1
	forms.seguquiambu_frm_dcirujano.foundset.seghistclinica  = globals.vHiscli
	forms.seguquiambu_frm_dcirujano.foundset.segfechacarga = globals.segambu_fecha_ingreso
	forms.seguquiambu_frm_dcirujano.foundset.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD88A9D8-74ED-4F81-A3D8-6244F3C00189"}
 */
function GrabaDCirujano(event) {
	forms.seguquiambu_frm_dcirujano.foundset.segtipocirufin  = forms.seguquiambu_frm_dcirujano.foundset.segtipociruini
	forms.seguquiambu_frm_dcirujano.foundset.seglegacirufin = forms.seguquiambu_frm_dcirujano.foundset.seglegaciruini
	
	try{
		databaseManager.saveData(forms.seguquiambu_frm_dcirujano.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_dcirujano.foundset)
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
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dcirujano')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FBB7633-E642-4567-B08A-0B70510B1708"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dcirujano')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
