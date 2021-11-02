/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B1D433D-A69C-49D4-B982-07435B22BAF9"}
 * @AllowToRunInFind
 */
function onShowDInstrumentadora(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.seguquiambu_frm_dinstrumentadora.foundset.find()
	forms.seguquiambu_frm_dinstrumentadora.foundset.segtipohc = 1
	forms.seguquiambu_frm_dinstrumentadora.foundset.seghistclinica  = globals.vHiscli
	forms.seguquiambu_frm_dinstrumentadora.foundset.segfechacarga = globals.segambu_fecha_ingreso
	forms.seguquiambu_frm_dinstrumentadora.foundset.seghoracarga = globals.segambu_hora_ingreso
	forms.seguquiambu_frm_dinstrumentadora.foundset.search()

	if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrupinzasfin == 1){
		globals.segambu_vdesinstru = 'No'
		}
	else {
		if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrupinzasfin == 2){
			globals.segambu_vdesinstru = 'Si'
		}
	}
	if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin == 1){
		forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin = 0
		}
	else {
		if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin == 2){
			forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin = 1
		}
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C59AC30C-34F5-4A81-8994-53AFBC94AFE2"}
 */
function GrabaDInstrumentadora(event) {
	if (globals.segambu_vdesinstru == 'No'){
		forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrupinzasfin = 1
		}
	else {
		if (globals.segambu_vdesinstru == 'Si'){
			forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrupinzasfin = 2
		}
	}
	if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin == 0){
		forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin = 1
		}
	else {
		if (forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin == 1){
			forms.seguquiambu_frm_dinstrumentadora.foundset.seginstrugasasfin = 2
		}
	}
	forms.seguquiambu_frm_dinstrumentadora.foundset.segtipoinstrufin  = forms.seguquiambu_frm_dinstrumentadora.foundset.segtipoinstruini
	forms.seguquiambu_frm_dinstrumentadora.foundset.seglegainstrufin = forms.seguquiambu_frm_dinstrumentadora.foundset.seglegainstruini

	try{
		databaseManager.saveData(forms.seguquiambu_frm_dinstrumentadora.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_dinstrumentadora.foundset)
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
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dinstrumentadora')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"348DF599-4B1B-4A09-9064-C272241FF9FD"}
 */
function onAction_Volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3E665E0-07D5-4082-BD4D-2F5D2F8DDE81"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dinstrumentadora')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
