/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9076E3A3-0F33-49C6-B061-A766E5B5CB74"}
 * @AllowToRunInFind
 */
function onshowDCirculante(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	forms.frm_dcirculante_new.foundset.find()
	forms.frm_dcirculante_new.foundset.segtipohc = 0
	forms.frm_dcirculante_new.foundset.seghistclinica  = globals.vhiscli
	forms.frm_dcirculante_new.foundset.segprotocolo = globals.vprotocolo
	forms.frm_dcirculante_new.foundset.search()

	if (forms.frm_dcirculante_new.foundset.segcirculmuestras == 1){
		globals.vmuestras = 'No'
		}
	else {
		if (forms.frm_dcirculante_new.foundset.segcirculmuestras == 2){
			globals.vmuestras = 'Si'
			}
	}
	if (forms.frm_dcirculante_new.foundset.segcirculregistro == 1){
		forms.frm_dcirculante_new.foundset.segcirculregistro = 0
		}
	else {
		if (forms.frm_dcirculante_new.foundset.segcirculregistro == 2){
			forms.frm_dcirculante_new.foundset.segcirculregistro = 1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5315D2B-EE5A-48FB-A895-1FF7A698C529"}
 */
function GrabaDCirculante(event){
	if (globals.vmuestras == 'No'){
		forms.frm_dcirculante_new.foundset.segcirculmuestras = 1
		}
	else {
		if (globals.vmuestras == 'Si'){
			forms.frm_dcirculante_new.foundset.segcirculmuestras = 2
		}
	}
	if (forms.frm_dcirculante_new.foundset.segcirculregistro == 0){
		forms.frm_dcirculante_new.foundset.segcirculregistro = 1
		}
	else {
		if (forms.frm_dcirculante_new.foundset.segcirculregistro == 1){
			forms.frm_dcirculante_new.foundset.segcirculregistro = 2
		}
	}
	forms.frm_dcirculante_new.foundset.segtipocirculfin = forms.frm_dcirculante_new.foundset.segtipocirculini
	forms.frm_dcirculante_new.foundset.seglegacirculfin = forms.frm_dcirculante_new.foundset.seglegacirculini


	databaseManager.saveData(forms.frm_dcirculante_new.foundset.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_dcirculante_new.foundset)
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
	globals.MuestroTildeSeguqui('frm_dcirculante_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"F8DE38CB-C896-4B2F-BA48-185FD34F4A8F"}
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
 * @properties={typeid:24,uuid:"94303063-6735-4A1D-BA84-A4315D4742D8"}
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
 * @properties={typeid:24,uuid:"EB0D23F0-8678-4EB0-9AEB-0B26E636522A"}
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
 * @properties={typeid:24,uuid:"235581EA-189F-4C59-B65D-FDC16A1DFCED"}
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
 * @properties={typeid:24,uuid:"8699CB07-CD52-4FA7-86E6-20CE5C12778B"}
 */
function onDataChange_rad_muestras(oldValue, newValue, event) {
	elements.segcirculproinstri.requestFocus()
	return true
}
