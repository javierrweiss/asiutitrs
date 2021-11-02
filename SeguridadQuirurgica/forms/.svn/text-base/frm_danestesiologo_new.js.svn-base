/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C57BF74-C067-45A7-96A9-A722F4CA5949"}
 * @AllowToRunInFind
 */
function onShowDAnestesiologo(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.frm_danestesiologo_new.foundset.find()
	forms.frm_danestesiologo_new.foundset.segtipohc = 0
	forms.frm_danestesiologo_new.foundset.seghistclinica  = globals.vhiscli
	forms.frm_danestesiologo_new.foundset.segprotocolo = globals.vprotocolo
	forms.frm_danestesiologo_new.foundset.search()
	
	if (forms.frm_danestesiologo_new.foundset.seganestplan == 1){
		forms.frm_danestesiologo_new.foundset.seganestplan = 0
	}
	else{
		if (forms.frm_danestesiologo_new.foundset.seganestplan == 2){
			forms.frm_danestesiologo_new.foundset.seganestplan = 1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E2AD76B-BD4D-49E9-8CF3-1985E6B41691"}
 */
function GrabaDAnestesiologo(event) {
	if (forms.frm_danestesiologo_new.foundset.seganestident == 1 && forms.frm_danestesiologo_new.foundset.seganestpulso == 1 &&
		forms.frm_danestesiologo_new.foundset.seganestseguri == 1 && forms.frm_danestesiologo_new.foundset.seganestalergia == 1){
		forms.frm_danestesiologo_new.foundset.seganestplan = 1
		forms.frm_danestesiologo_new.foundset.segtipoanestfin = 9
		forms.frm_danestesiologo_new.foundset.seglegaanestfin = 999999
		}
	else {
		if (forms.frm_danestesiologo_new.foundset.seganestplan == 0){
			forms.frm_danestesiologo_new.foundset.seganestplan = 1
		}
		else{
			if (forms.frm_danestesiologo_new.foundset.seganestplan == 1){
				forms.frm_danestesiologo_new.foundset.seganestplan = 2
				}
		}
	}
	forms.frm_danestesiologo_new.foundset.segtipoanestfin = forms.frm_danestesiologo_new.foundset.segtipoanestini
	forms.frm_danestesiologo_new.foundset.seglegaanestfin = forms.frm_danestesiologo_new.foundset.seglegaanestini

	
	databaseManager.saveData(forms.frm_danestesiologo_new.foundset.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_danestesiologo_new.foundset)
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
	globals.MuestroTildeSeguqui('frm_danestesiologo_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
	
}
