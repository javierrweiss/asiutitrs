/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9036D913-C524-423D-A9DF-BABA5ADB3AA6"}
 * @AllowToRunInFind
 */
function onShowACirujano(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	if (globals.vexistesegu == 'N'){
		forms.frm_acirujano_new.foundset.newRecord()
		globals.InicializarDatos('frm_acirujano_new','asistencial','tbc_seguqui_new')
	    }
	else {
		forms.frm_acirujano_new.foundset.find()
		forms.frm_acirujano_new.foundset.segtipohc1 = 0
		forms.frm_acirujano_new.foundset.seghistclinica1  = globals.vhiscli
		forms.frm_acirujano_new.foundset.segprotocolo = globals.vprotocolo
		forms.frm_acirujano_new.foundset.search()
		globals.vApeynomCirujano=seglegaciruini_to_tbc_medicos_personal.medperapeynom
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F65BADC-6178-4BC6-8153-7CCC08D5D5E6"}
 */
function GrabaACirujano(event) {
	if (globals.vexistesegu == 'N'){
		forms.frm_acirujano_new.foundset.segtipohc = 0
		forms.frm_acirujano_new.foundset.segtipohc1 = 0
		forms.frm_acirujano_new.foundset.seghistclinica   = globals.vhiscli
		forms.frm_acirujano_new.foundset.seghistclinica1 = globals.vhiscli
		var fecha = application.getServerTimeStamp()
		forms.frm_acirujano_new.foundset.segfechacarga  = globals.FormatearFecha(fecha,'AAAAMMDD')
		forms.frm_acirujano_new.foundset.seghoracarga = globals.FormatearFecha(fecha,'HHMM')
		forms.frm_acirujano_new.foundset.segprotocolo = 0
		
		globals.vexistesegu = 'S'
		//databaseManager.saveData()
	}
	databaseManager.saveData(forms.frm_acirujano_new.foundset.getRecord(1))
	
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_acirujano_new.foundset)
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
	if(forms.frm_acirujano_new.foundset.seglegaciruini==0){
		globals.LegajoApeynomCiru=''
	}
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_acirujano_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25233E88-4FB3-42D3-B2A4-F8623E3D792B"}
 */
function onAction_busco_seglegaciruini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Cirujano";
	win.setSize(850,550)
	win.show(forms.frm_busqueda_medicos_personal_copy)
	foundset.seglegaciruini=globals.vCodigoMedicoSegu
	globals.vApeynomCirujano=globals.vApeynomMedicoSegu
	elements.btn_graba_acirujano.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE1BBD7D-1781-4FDB-83E1-EB578F7D9C42"}
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
			globals.vApeynomCirujano=fs['medperapeynom']
			forms.frm_acirujano_new.foundset.seglegaciruini=fs['medpercod']
			globals.LegajoApeynomCiru=''
			elements.btn_graba_acirujano.requestFocus()
		}else{
			globals.vApeynomCirujano='Profesional Inexistente'
			forms.frm_acirujano_new.foundset.seglegaciruini=0
			globals.LegajoApeynomCiru=''
		}
    }
    else{
    	    globals.vProfeAlfa = globals.LegajoApeynomCiru.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Cirujano";
			win.setSize(850,550)
			win.show(forms.frm_busqueda_medicos_personal_copy)
			forms.frm_acirujano_new.foundset.seglegaciruini=globals.vCodigoMedicoSegu
			globals.vApeynomCirujano=globals.vApeynomMedicoSegu
			globals.LegajoApeynomCiru=''
			elements.btn_graba_acirujano.requestFocus()
    }
	
}
