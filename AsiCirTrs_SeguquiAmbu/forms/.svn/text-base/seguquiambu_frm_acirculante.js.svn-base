/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76A9AA10-C1F1-4761-A49B-BB3705275D10"}
 * @AllowToRunInFind
 */
function onShowACirculante(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	globals.LegajoApeynomCirculante=''
	//databaseManager.rollbackEditedRecords()
	if (globals.segambu_existesegu == 'N'){
		globals.segambu_vmaterial = ' '
		forms.seguquiambu_frm_acirculante.foundset.newRecord()
		globals.InicializarDatos('seguquiambu_frm_acirculante','asistencial','tbc_seguqui_new')
	    }
	else {
		forms.seguquiambu_frm_acirculante.foundset.find()
		forms.seguquiambu_frm_acirculante.foundset.segtipohc = globals.segambu_tipohist
		forms.seguquiambu_frm_acirculante.foundset.seghistclinica = globals.vHiscli
		forms.seguquiambu_frm_acirculante.foundset.segfechacarga   = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_acirculante.foundset.seghoracarga   = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_acirculante.foundset.search()
		
		if (forms.seguquiambu_frm_acirculante.foundset.segcirculmate == 1){
			globals.segambu_vmaterial = 'No Aplicable'
			}
		else {
			if (forms.seguquiambu_frm_acirculante.foundset.segcirculmate == 2){
				globals.segambu_vmaterial = 'Aplicable'
			}
		}
		if(seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini!=0&&seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini!=null){
			globals.segambu_vApeynomCirculante=segambulegaciruclini_to_tbc_personal.per_apelnom
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B5D3241-8278-4DE6-B19B-6A212F3A757B"}
 */
function GrabaACirculante(event) {
	//plugins.dialogs.showInfoDialog("vexistesegu",globals.vexistesegu)
	if (globals.segambu_existesegu == 'N'){
		
		forms.seguquiambu_frm_acirculante.foundset.segtipohc = 1
		forms.seguquiambu_frm_acirculante.foundset.segtipohc1 = 1
		forms.seguquiambu_frm_acirculante.foundset.seghistclinica= globals.vHiscli
		forms.seguquiambu_frm_acirculante.foundset.seghistclinica1 = globals.vHiscli
		
		forms.seguquiambu_frm_acirculante.foundset.segfechacarga  = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_acirculante.foundset.seghoracarga = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_acirculante.foundset.segprotocolo = 0
		
		if (globals.segambu_vmaterial == 'No Aplicable') {
			forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 1
			}
		else {
			if (globals.segambu_vmaterial == 'Aplicable')
				forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 2
			else
				forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 0
		}
		globals.segambu_existesegu = 'S'
	}
	else {
		if (globals.segambu_vmaterial == 'No Aplicable')
			forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 1
		else {
			if (globals.segambu_vmaterial == 'Aplicable')
				forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 2
			else
				forms.seguquiambu_frm_acirculante.foundset.segcirculmate = 0
		}
	}
		
	forms.seguquiambu_frm_acirculante.foundset.segtipoadmin = forms.seguquiambu_frm_acirculante.foundset.segtipocirculini
	forms.seguquiambu_frm_acirculante.foundset.seglegaadmin = forms.seguquiambu_frm_acirculante.foundset.seglegacirculini
	try{
		databaseManager.saveData(forms.seguquiambu_frm_acirculante.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_acirculante.foundset)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error2,"Ok")
	}
	
	//databaseManager.refreshRecordFromDatabase(forms.frm_acirculante_new.foundset, 1)
	
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirculante')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8376F0FA-6E36-4DB7-B70A-1BAC039F5028"}
 */
function onAction_busca_seglegacirculini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Circulante";
	win.setSize(850,550)
	win.show(forms.seguquiambu_frm_busqueda_personal)
	foundset.seglegacirculini=globals.segambu_vCodigoMedicoSegu
	globals.segambu_vApeynomCirculante=globals.segambu_vApeynomMedicoSegu
	elements.btn_graba_acirculante.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69D06284-F09A-42B6-8515-17075F21712E"}
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
			globals.segambu_vApeynomCirculante=fs['per_apelnom']
			forms.seguquiambu_frm_acirculante.foundset.seglegacirculini=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_acirculante.requestFocus()
		}else{
			globals.segambu_vApeynomCirculante='Legajo Inexistente'
			forms.seguquiambu_frm_acirculante.foundset.seglegacirculini=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Circulante";
			win.setSize(850,550)
			win.show(forms.seguquiambu_frm_busqueda_personal)
			forms.seguquiambu_frm_acirculante.foundset.seglegacirculini=globals.segambu_vCodigoMedicoSegu
			globals.segambu_vApeynomCirculante=globals.segambu_vApeynomMedicoSegu
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_acirculante.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3BEB86D9-DAF5-4783-BDAC-8DCD982CECA9"}
 */
function onAction_btn_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
