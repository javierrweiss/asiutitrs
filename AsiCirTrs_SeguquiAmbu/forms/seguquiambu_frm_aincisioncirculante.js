/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered thvhiscli_to_admisione action
 *
 * @properties={typeid:24,uuid:"F5EE7368-9C3C-468E-AD64-D393770F749D"}
 * @AllowToRunInFind
 */
function onShowAAnestesiologo(firstShow, event) {
	
		if (globals.segambu_existesegu == 'N'){
			globals.segambu_valergia = '  '
			forms.seguquiambu_frm_aincisioncirculante.foundset.newRecord()
			globals.InicializarDatos('seguquiambu_frm_aincisioncirculante','asistencial','tbc_seguqui_new')
		}else{
			globals.segambu_vApeynomCirculCut=segambulegacirculcut_to_tbc_personal.per_apelnom
		}
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70B6D9F1-47C9-4B51-9B7E-29EE27A17762"}
 */
function GrabaAntesIncisionCirculante(event) {
	try{
		databaseManager.saveData(forms.seguquiambu_frm_aincisioncirculante.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_aincisioncirculante.foundset)
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
	if(forms.seguquiambu_frm_aincisioncirculante.foundset.seglegacirculcut==0){
		globals.LegajoApeynomCirculante=''
	}
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_aincisioncirculante')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D04FF8EC-BDB0-453E-8CAF-2132CB05AE9A"}
 */
function onAction_buscaCirculCut(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Médico Circulante";
	win.setSize(850,550)
	win.show(forms.seguquiambu_frm_busqueda_personal)
	foundset.seglegacirculcut=globals.segambu_vCodigoMedicoSegu
	globals.segambu_vApeynomCirculCut=globals.segambu_vApeynomMedicoSegu
	elements.btn_graba_circulcut.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7DB4A63B-B565-47E8-B1B0-3DD435F23891"}
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
			globals.segambu_vApeynomCirculCut=fs['per_apelnom']
			foundset.seglegacirculcut=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_circulcut.requestFocus()
		}else{
			globals.segambu_vApeynomCirculCut='Legajo Inexistente'
			foundset.seglegacirculcut=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Circulante";
			win.setSize(850,550)
			win.show(forms.seguquiambu_frm_busqueda_personal)
			foundset.seglegacirculcut=globals.segambu_vCodigoMedicoSegu
			globals.segambu_vApeynomCirculCut=globals.segambu_vApeynomMedicoSegu
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
 * @properties={typeid:24,uuid:"939F3282-845E-4B95-BF5E-A750C13614DD"}
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
 * @properties={typeid:24,uuid:"0B35D0B9-53EE-4E06-8EFC-760FDB87CA02"}
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
 * @properties={typeid:24,uuid:"35016EB8-879B-4580-AEF2-89895A870885"}
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
 * @properties={typeid:24,uuid:"610E91BC-5B32-42B7-BE1A-218739C14970"}
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
 * @properties={typeid:24,uuid:"7B7F41DD-6950-442A-B4BC-196AC60B0DB8"}
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
 * @properties={typeid:24,uuid:"25514D7C-657F-41F7-AAAF-5405DC3C42CD"}
 */
function onDataChange_segcirculanesproblema(oldValue, newValue, event) {
	elements.lega_anest_ini.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BCAF339-D282-42E4-8B77-22740AA82F75"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_aincisioncirculante')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
