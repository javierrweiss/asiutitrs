/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered thvhiscli_to_admisione action
 *
 * @properties={typeid:24,uuid:"95E62694-1951-469B-83F6-ABE0E60F4CEE"}
 * @AllowToRunInFind
 */
function onShowAAnestesiologo(firstShow, event) {
	
		if (globals.vexistesegu == 'N'){
			globals.valergia = '  '
			forms.frm_aincisioncirculante_new.foundset.newRecord()
			globals.InicializarDatos('frm_aincisioncirculante_new','asistencial','tbc_seguqui_new')
		}else{
			globals.vApeynomCirculCut=seglegacirculcut_to_tbc_personal.per_apelnom
		}
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"403E207B-7EEC-4FEA-ADC3-C856BE57D934"}
 */
function GrabaAntesIncisionCirculante(event) {
	databaseManager.saveData(forms.frm_aincisioncirculante_new.foundset.getRecord(1))
	
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_aincisioncirculante_new.foundset)
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
	if(forms.frm_aincisioncirculante_new.foundset.seglegacirculcut==0){
		globals.LegajoApeynomCirculante=''
	}
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_aincisioncirculante_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2ED1A59-024E-4BEC-AF0A-04B02BFFD94E"}
 */
function onAction_buscaCirculCut(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Médico Circulante";
	win.setSize(850,550)
	win.show(forms.frm_busqueda_personal)
	foundset.seglegacirculcut=globals.vCodigoMedicoSegu
	globals.vApeynomCirculCut=globals.vApeynomMedicoSegu
	elements.btn_graba_circulcut.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76672694-B1A9-4465-93CE-D55BCB269FC8"}
 * @AllowToRunInFind
 */
function onAction_lega_circulcut(event) {
	var largo = globals.LegajoApeynomCirculante.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.LegajoApeynomCirculante.charCodeAt(i)< 48 || globals.LegajoApeynomCirculante.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_personal')
		fs.find()
		fs['per_legajo']=utils.stringToNumber(globals.LegajoApeynomCirculante.substr(0,largo-1))
		fs.search()
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			globals.vApeynomCirculCut=fs['per_apelnom']
			foundset.seglegacirculcut=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_circulcut.requestFocus()
		}else{
			globals.vApeynomCirculCut='Legajo Inexistente'
			foundset.seglegacirculcut=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Circulante";
			win.setSize(850,550)
			win.show(forms.frm_busqueda_personal)
			foundset.seglegacirculcut=globals.vCodigoMedicoSegu
			globals.vApeynomCirculCut=globals.vApeynomMedicoSegu
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_circulcut.requestFocus()
    }
	
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
 * @properties={typeid:24,uuid:"8996F2F1-F3EC-4D5E-8ECA-3E7ACF690831"}
 */
function onDataChange_segcirculequipres(oldValue, newValue, event) {
	elements.segcirculequifunc.requestFocus()
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
 * @properties={typeid:24,uuid:"9846ECD5-BB11-430B-B899-307531DC2230"}
 */
function onDataChange_segcirculequifunc(oldValue, newValue, event) {
	elements.segcirculidsipr.requestFocus()
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
 * @properties={typeid:24,uuid:"EFC1B28C-3C46-4E32-96BE-30747F12AB5A"}
 */
function onDataChange_segcirculidsipr(oldValue, newValue, event) {
	elements.segcirculdecubi.requestFocus()
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
 * @properties={typeid:24,uuid:"A4FAD5AA-35DE-4540-8D3A-71773147C3B0"}
 */
function onDataChange_segcirculdecubi(oldValue, newValue, event) {
	elements.segcirculimprev.requestFocus()
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
 * @properties={typeid:24,uuid:"E77F4E0E-46AA-45BD-B4B7-BD87193AB21A"}
 */
function onDataChange_segcirculimprev(oldValue, newValue, event) {
	elements.segcirculanesproblema.requestFocus()
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
 * @properties={typeid:24,uuid:"41BD0158-A192-4CAA-BFCF-0E8CDCCD74BA"}
 */
function onDataChange_segcirculanesproblema(oldValue, newValue, event) {
	elements.lega_anest_ini.requestFocus()
	return true
}
