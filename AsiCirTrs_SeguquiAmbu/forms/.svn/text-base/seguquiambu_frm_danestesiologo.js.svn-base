/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"996E0DE3-8115-4396-AD78-CC644E4ECD43"}
 * @AllowToRunInFind
 */
function onShowDAnestesiologo(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.seguquiambu_frm_danestesiologo.foundset.find()
	forms.seguquiambu_frm_danestesiologo.foundset.segtipohc = 1
	forms.seguquiambu_frm_danestesiologo.foundset.seghistclinica  = globals.vHiscli
	forms.seguquiambu_frm_danestesiologo.foundset.segfechacarga = globals.segambu_fecha_ingreso
	forms.seguquiambu_frm_danestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
	forms.seguquiambu_frm_danestesiologo.foundset.search()
	
	if (forms.seguquiambu_frm_danestesiologo.foundset.seganestplan == 1){
		forms.seguquiambu_frm_danestesiologo.foundset.seganestplan = 0
	}
	else{
		if (forms.seguquiambu_frm_danestesiologo.foundset.seganestplan == 2){
			forms.seguquiambu_frm_danestesiologo.foundset.seganestplan = 1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F52B917A-0AEB-4FDB-8737-5461A312091A"}
 */
function GrabaDAnestesiologo(event) {
	if (forms.seguquiambu_frm_danestesiologo.foundset.seganestident == 1 && forms.seguquiambu_frm_danestesiologo.foundset.seganestpulso == 1 &&
		forms.seguquiambu_frm_danestesiologo.foundset.seganestseguri == 1 && forms.seguquiambu_frm_danestesiologo.foundset.seganestalergia == 1){
		forms.seguquiambu_frm_danestesiologo.foundset.seganestplan = 1
		forms.seguquiambu_frm_danestesiologo.foundset.segtipoanestfin = 9
		forms.seguquiambu_frm_danestesiologo.foundset.seglegaanestfin = 999999
		}
	else {
		if (forms.seguquiambu_frm_danestesiologo.foundset.seganestplan == 0){
			forms.seguquiambu_frm_danestesiologo.foundset.seganestplan = 1
		}
		else{
			if (forms.seguquiambu_frm_danestesiologo.foundset.seganestplan == 1){
				forms.seguquiambu_frm_danestesiologo.foundset.seganestplan = 2
				}
		}
	}
	forms.seguquiambu_frm_danestesiologo.foundset.segtipoanestfin = forms.seguquiambu_frm_danestesiologo.foundset.segtipoanestini
	forms.seguquiambu_frm_danestesiologo.foundset.seglegaanestfin = forms.seguquiambu_frm_danestesiologo.foundset.seglegaanestini

	try{
		databaseManager.saveData(forms.seguquiambu_frm_danestesiologo.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_danestesiologo.foundset)
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
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_danestesiologo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4547788-4B22-45AA-83D1-50110A898639"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_danestesiologo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
