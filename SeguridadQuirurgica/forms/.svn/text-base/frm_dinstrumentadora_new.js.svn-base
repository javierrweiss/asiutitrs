/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED1DA78B-686E-4731-AEDC-E6F833E75590"}
 * @AllowToRunInFind
 */
function onShowDInstrumentadora(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.frm_dinstrumentadora_new.foundset.find()
	forms.frm_dinstrumentadora_new.foundset.segtipohc = 0
	forms.frm_dinstrumentadora_new.foundset.seghistclinica  = globals.vhiscli
	forms.frm_dinstrumentadora_new.foundset.segprotocolo = globals.vprotocolo
	forms.frm_dinstrumentadora_new.foundset.search()

	if (forms.frm_dinstrumentadora_new.foundset.seginstrupinzasfin == 1){
		globals.vdesinstru = 'No'
		}
	else {
		if (forms.frm_dinstrumentadora_new.foundset.seginstrupinzasfin == 2){
			globals.vdesinstru = 'Si'
		}
	}
	if (forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin == 1){
		forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin = 0
		}
	else {
		if (forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin == 2){
			forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin = 1
		}
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB248A80-BD27-4CD2-BD44-19317063843F"}
 */
function GrabaDInstrumentadora(event) {
	if (globals.vdesinstru == 'No'){
		forms.frm_dinstrumentadora_new.foundset.seginstrupinzasfin = 1
		}
	else {
		if (globals.vdesinstru == 'Si'){
			forms.frm_dinstrumentadora_new.foundset.seginstrupinzasfin = 2
		}
	}
	if (forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin == 0){
		forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin = 1
		}
	else {
		if (forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin == 1){
			forms.frm_dinstrumentadora_new.foundset.seginstrugasasfin = 2
		}
	}
	forms.frm_dinstrumentadora_new.foundset.segtipoinstrufin  = forms.frm_dinstrumentadora_new.foundset.segtipoinstruini
	forms.frm_dinstrumentadora_new.foundset.seglegainstrufin = forms.frm_dinstrumentadora_new.foundset.seglegainstruini

	
	databaseManager.saveData(forms.frm_dinstrumentadora_new.foundset.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_dinstrumentadora_new.foundset)
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
	globals.MuestroTildeSeguqui('frm_dinstrumentadora_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EC734FAA-5F7C-4D14-A58B-20FD6403F9BD"}
 */
function onAction_Volver(event) {
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
}
