/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74157E12-2E41-4CC9-8EFF-E07375761165"}
 * @AllowToRunInFind
 */
function onshowDCirculante(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.seguquiambu_frm_dcirculante.foundset.find()
	forms.seguquiambu_frm_dcirculante.foundset.segtipohc = 1
	forms.seguquiambu_frm_dcirculante.foundset.seghistclinica  = globals.vHiscli
	forms.seguquiambu_frm_dcirculante.foundset.segfechacarga = globals.segambu_fecha_ingreso
	forms.seguquiambu_frm_dcirculante.foundset.seghoracarga = globals.segambu_hora_ingreso
	forms.seguquiambu_frm_dcirculante.foundset.search()

	if (forms.seguquiambu_frm_dcirculante.foundset.segcirculmuestras == 1){
		globals.segambu_muestras = 'No'
		}
	else {
		if (forms.seguquiambu_frm_dcirculante.foundset.segcirculmuestras == 2){
			globals.segambu_muestras = 'Si'
			}
	}
	if (forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro == 1){
		forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro = 0
		}
	else {
		if (forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro == 2){
			forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro = 1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4135230-FD5E-45E0-ADEA-3BCB2981843C"}
 */
function GrabaDCirculante(event){
	if (globals.segambu_muestras == 'No'){
		forms.seguquiambu_frm_dcirculante.foundset.segcirculmuestras = 1
		}
	else {
		if (globals.segambu_muestras == 'Si'){
			forms.seguquiambu_frm_dcirculante.foundset.segcirculmuestras = 2
		}
	}
	if (forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro == 0){
		forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro = 1
		}
	else {
		if (forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro == 1){
			forms.seguquiambu_frm_dcirculante.foundset.segcirculregistro = 2
		}
	}
	forms.seguquiambu_frm_dcirculante.foundset.segtipocirculfin = forms.seguquiambu_frm_dcirculante.foundset.segtipocirculini
	forms.seguquiambu_frm_dcirculante.foundset.seglegacirculfin = forms.seguquiambu_frm_dcirculante.foundset.seglegacirculini

	try{
		databaseManager.saveData(forms.seguquiambu_frm_dcirculante.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_dcirculante.foundset)
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
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dcirculante')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E99715DC-9604-4AF9-862C-FA0D4A1C8E5B"}
 */
function onDataChange_segcirculproinstru(oldValue, newValue, event) {
	elements.segcirculnormot.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E142C19A-FBDE-432B-962D-7A5DBE2BB01D"}
 */
function onDataChange_segcirculormot(oldValue, newValue, event) {
	elements.segcirculparteciru.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3015FB32-4836-47C6-9642-E166AE8D2424"}
 */
function onDataChange_segcirculparteciru(oldValue, newValue, event) {
	elements.segcirculparteanes.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4B65D57E-2FFB-4367-BB81-EC3C86547619"}
 */
function onDataChange_segcirculparteanes(oldValue, newValue, event) {
	elements.btn_graba.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D5625B57-CB32-40A0-BCC0-52BD1032EE62"}
 */
function onDataChange_rad_muestras(oldValue, newValue, event) {
	elements.segcirculproinstri.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD51234E-3D80-4C0D-B825-6A8A8E377B3F"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_dcirculante')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
