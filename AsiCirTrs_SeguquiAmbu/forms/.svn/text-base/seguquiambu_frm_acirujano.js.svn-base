/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"309A5F5D-1070-412A-9DF4-6C05541F344D"}
 * @AllowToRunInFind
 */
function onShowACirujano(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	if (globals.segambu_existesegu == 'N'){
		forms.seguquiambu_frm_acirujano.foundset.newRecord()
		globals.InicializarDatos('seguquiambu_frm_acirujano','asistencial','tbc_seguqui_new')
	    }
	else {
		forms.seguquiambu_frm_acirujano.foundset.find()
		forms.seguquiambu_frm_acirujano.foundset.segtipohc = 1
		forms.seguquiambu_frm_acirujano.foundset.seghistclinica  = globals.vHiscli
		forms.seguquiambu_frm_acirujano.foundset.segfechacarga = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_acirujano.foundset.seghoracarga = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_acirujano.foundset.search()
		globals.segambu_vApeynomCirujano=segambulegaciruini_to_tbc_medicos_personal.medperapeynom
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7EEDB36-C8BA-4ED7-8172-9953C3F8D33E"}
 */
function GrabaACirujano(event) {
	if (globals.segambu_existesegu == 'N'){
		forms.seguquiambu_frm_acirujano.foundset.segtipohc = 1
		forms.seguquiambu_frm_acirujano.foundset.segtipohc1 = 1
		forms.seguquiambu_frm_acirujano.foundset.seghistclinica   = globals.vHiscli
		forms.seguquiambu_frm_acirujano.foundset.seghistclinica1 = globals.vHiscli
		forms.seguquiambu_frm_acirujano.foundset.segfechacarga  = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_acirujano.foundset.seghoracarga = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_acirujano.foundset.segprotocolo = 0
		
		globals.segambu_existesegu = 'S'
		//databaseManager.saveData()
	}
	try{
		databaseManager.saveData(forms.seguquiambu_frm_acirujano.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_acirujano.foundset)
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
	if(forms.seguquiambu_frm_acirujano.foundset.seglegaciruini==0){
		globals.LegajoApeynomCiru=''
	}
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirujano')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"896BBCC9-221A-418A-8226-A2309E6B123D"}
 */
function onAction_busco_seglegaciruini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Cirujano";
	win.setSize(850,550)
	win.show(forms.seguquiambu_frm_busqueda_medicos_personal)
	foundset.seglegaciruini=globals.segambu_vCodigoMedicoSegu
	globals.segambu_vApeynomCirujano=globals.segambu_vApeynomMedicoSegu
	elements.btn_graba_acirujano.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D983FF6C-7626-451D-83E5-19B894845B60"}
 * @AllowToRunInFind
 */
function onAction_aCirujano(event) {
	var largo = globals.LegajoApeynomCiru.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.LegajoApeynomCiru.charCodeAt(i)< 48 || globals.LegajoApeynomCiru.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_medicos_personal')
		fs.find()
		fs['medpercod']=utils.stringToNumber(globals.LegajoApeynomCiru.substr(0,largo-1))
		fs.search()
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			globals.segambu_vApeynomCirujano=fs['medperapeynom']
			forms.seguquiambu_frm_acirujano.foundset.seglegaciruini=fs['medpercod']
			globals.LegajoApeynomCiru=''
			elements.btn_graba_acirujano.requestFocus()
		}else{
			globals.segambu_vApeynomCirujano='Profesional Inexistente'
			forms.seguquiambu_frm_acirujano.foundset.seglegaciruini=0
			globals.LegajoApeynomCiru=''
		}
    }
    else{
    	    globals.vProfeAlfa = globals.LegajoApeynomCiru.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Cirujano";
			win.setSize(850,550)
			win.show(forms.seguquiambu_frm_busqueda_medicos_personal)
			forms.seguquiambu_frm_acirujano.foundset.seglegaciruini=globals.segambu_vCodigoMedicoSegu
			globals.segambu_vApeynomCirujano=globals.segambu_vApeynomMedicoSegu
			globals.LegajoApeynomCiru=''
			elements.btn_graba_acirujano.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F45E808A-DBCB-4A2C-A738-1D39D1FCCAF9"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirujano')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
