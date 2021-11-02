/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D6A7CA1-8C87-4437-9A4D-95E4ACDA9246"}
 * @AllowToRunInFind
 */
function onShowACirculante(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	globals.LegajoApeynomCirculante=''
	//databaseManager.rollbackEditedRecords()
	if (globals.vexistesegu == 'N'){
		globals.vmaterial = ' '
		forms.frm_acirculante_new.foundset.newRecord()
		globals.InicializarDatos('frm_acirculante_new','asistencial','tbc_seguqui_new')
	    }
	else {
		forms.frm_acirculante_new.foundset.find()
		forms.frm_acirculante_new.foundset.segtipohc1 = globals.vtipohist
		forms.frm_acirculante_new.foundset.seghistclinica1 = globals.vhiscli
		forms.frm_acirculante_new.foundset.segprotocolo   = globals.vprotocolo
		forms.frm_acirculante_new.foundset.search()
		
		if (forms.frm_acirculante_new.foundset.segcirculmate == 1){
			globals.vmaterial = 'No aplicable'
			}
		else {
			if (forms.frm_acirculante_new.foundset.segcirculmate == 2){
				globals.vmaterial = 'Aplicable'
			}
		}
		globals.vApeynomCirculante=seglegaciruclini_to_tbc_personal.per_apelnom
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"267438B6-8549-4D97-83A0-A1B2FF5D096A"}
 */
function GrabaACirculante(event) {
	//plugins.dialogs.showInfoDialog("vexistesegu",globals.vexistesegu)
	if (globals.vexistesegu == 'N'){
		
		forms.frm_acirculante_new.foundset.segtipohc = 0
		forms.frm_acirculante_new.foundset.segtipohc1 = 0
		forms.frm_acirculante_new.foundset.seghistclinica= globals.vhiscli
		forms.frm_acirculante_new.foundset.seghistclinica1 = globals.vhiscli
		var fec = application.getServerTimeStamp()
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()>9){
			dia_ed=dia
		}else{
			dia_ed="0"+dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		forms.frm_acirculante_new.foundset.segfechacarga  = fecha_hoy
		forms.frm_acirculante_new.foundset.seghoracarga = globals.FormatearFecha(fec,'HHMM')
		forms.frm_acirculante_new.foundset.segprotocolo = 0
		
		if (globals.vmaterial == 'No aplicable') {
			forms.frm_acirculante_new.foundset.segcirculmate = 1
			}
		else {
			if (globals.vmaterial == 'Aplicable')
				forms.frm_acirculante_new.foundset.segcirculmate = 2
			else
				forms.frm_acirculante_new.foundset.segcirculmate = 0
		}
		globals.vexistesegu = 'S'
	}
	else {
		if (globals.vmaterial == 'No aplicable')
			forms.frm_acirculante_new.foundset.segcirculmate = 1
		else {
			if (globals.vmaterial == 'Aplicable')
				forms.frm_acirculante_new.foundset.segcirculmate = 2
			else
				forms.frm_acirculante_new.foundset.segcirculmate = 0
		}
	}
		
	forms.frm_acirculante_new.foundset.segtipoadmin = forms.frm_acirculante_new.foundset.segtipocirculini
	forms.frm_acirculante_new.foundset.seglegaadmin = forms.frm_acirculante_new.foundset.seglegacirculini
	
	databaseManager.saveData(forms.frm_acirculante_new.foundset.getRecord(1))
	
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_acirculante_new.foundset)
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
	
	//databaseManager.refreshRecordFromDatabase(forms.frm_acirculante_new.foundset, 1)
	
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_acirculante_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1AC1D68A-EDDA-4158-8911-016F2870F3B5"}
 */
function onAction_busca_seglegacirculini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Circulante";
	win.setSize(850,550)
	win.show(forms.frm_busqueda_personal)
	foundset.seglegacirculini=globals.vCodigoMedicoSegu
	globals.vApeynomCirculante=globals.vApeynomMedicoSegu
	elements.btn_graba_acirculante.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B663599-3C63-449E-BFF5-58284773ADEB"}
 * @AllowToRunInFind
 */
function onAction_lega_acirculante(event) {
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
			globals.vApeynomCirculante=fs['per_apelnom']
			forms.frm_acirculante_new.foundset.seglegacirculini=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_acirculante.requestFocus()
		}else{
			globals.vApeynomCirculante='Legajo Inexistente'
			forms.frm_acirculante_new.foundset.seglegacirculini=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Circulante";
			win.setSize(850,550)
			win.show(forms.frm_busqueda_personal)
			forms.frm_acirculante_new.foundset.seglegacirculini=globals.vCodigoMedicoSegu
			globals.vApeynomCirculante=globals.vApeynomMedicoSegu
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_acirculante.requestFocus()
    }
	
}
