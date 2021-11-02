/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AED2669-A86C-41B8-98C2-E1748DD2C129"}
 * @AllowToRunInFind
 */
function onShowATodo(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	if (globals.segambu_existesegu == 'N'){
		forms.seguquiambu_frm_atodo.foundset.newRecord()
		globals.InicializarDatos('seguquiambu_frm_atodo','asistencial','tbc_seguqui_new')
	}else{
		forms.seguquiambu_frm_atodo.foundset.find()
		forms.seguquiambu_frm_atodo.foundset.segtipohc = 1
		forms.seguquiambu_frm_atodo.foundset.seghistclinica1  = globals.vHiscli
		forms.seguquiambu_frm_atodo.foundset.segfechacarga = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_atodo.foundset.seghoracarga = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_atodo.foundset.search()
		if (forms.seguquiambu_frm_atodo.foundset.seganestident == 1 && forms.seguquiambu_frm_atodo.foundset.seganestpulso == 1 &&
			forms.seguquiambu_frm_atodo.foundset.seganestseguri == 1 && forms.seguquiambu_frm_atodo.foundset.seganestalergia == 1 &&
			forms.seguquiambu_frm_atodo.foundset.seganestviaaerea == 1 && forms.seguquiambu_frm_atodo.foundset.seganestacceso == 1 &&
			forms.seguquiambu_frm_atodo.foundset.seganestsangre == 1 && forms.seguquiambu_frm_atodo.foundset.seganestocular == 1 &&
			forms.seguquiambu_frm_atodo.foundset.seganestdecubi == 1){
				forms.seguquiambu_frm_atodo.elements.chk_anest_repasa_ini_1.visible = false
				forms.seguquiambu_frm_atodo.elements.chk_anest_repasa_ini_2.visible = false
				forms.seguquiambu_frm_atodo.elements.lbl_anes.visible = true
		}
		else {
				if (forms.seguquiambu_frm_atodo.foundset.seganestrepasaini == 1){
					forms.seguquiambu_frm_atodo.foundset.seganestrepasaini = 0
				}
				else {
					if (forms.seguquiambu_frm_atodo.foundset.seganestrepasaini == 2){
						forms.seguquiambu_frm_atodo.foundset.seganestrepasaini = 1
					}
				}
				forms.seguquiambu_frm_atodo.elements.chk_anest_repasa_ini_1.visible = true
				forms.seguquiambu_frm_atodo.elements.chk_anest_repasa_ini_2.visible = true
				forms.seguquiambu_frm_atodo.elements.lbl_anes.visible = false
		}
	
		if (forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini == 1){
			forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini = 0
		}
		else {
			if (forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini == 2){
				forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini = 1
			}
		}
		if (forms.seguquiambu_frm_atodo.foundset.seginstrugasasini == 1){
			forms.seguquiambu_frm_atodo.foundset.seginstrugasasini = 0
		}
		else {
			if (forms.seguquiambu_frm_atodo.foundset.seginstrugasasini == 2){
				forms.seguquiambu_frm_atodo.foundset.seginstrugasasini = 1
			}
		}
	
		if (forms.seguquiambu_frm_atodo.foundset.seginstrupinzasini == 1){
			globals.segambu_vantinstru = 'No'
		}
		else {
			if (forms.seguquiambu_frm_atodo.foundset.seginstrupinzasini == 2){
				globals.segambu_vantinstru = 'Si'
			}
		}
		globals.segambu_vApeynomEquipo=segambulegainstruini_to_tbc_personal.per_apelnom
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC3DDCD3-50E0-429E-9836-5AE5639FB27E"}
 */
function GrabaATodo(event) {
	//plugins.dialogs.showInfoDialog("vaninstru",globals.vantinstru)
	if (globals.segambu_vantinstru == 'No'){
		forms.seguquiambu_frm_atodo.foundset.seginstrupinzasini = 1
		}
	else {
		if (globals.segambu_vantinstru == 'Si'){
			forms.seguquiambu_frm_atodo.foundset.seginstrupinzasini = 2
		}
	}
	
	if (forms.seguquiambu_frm_atodo.foundset.seganestident == 1 && forms.seguquiambu_frm_atodo.foundset.seganestpulso == 1 &&
		forms.seguquiambu_frm_atodo.foundset.seganestseguri == 1 && forms.seguquiambu_frm_atodo.foundset.seganestalergia == 1 &&
		forms.seguquiambu_frm_atodo.foundset.seganestviaaerea == 1 && forms.seguquiambu_frm_atodo.foundset.seganestacceso == 1 &&
		forms.seguquiambu_frm_atodo.foundset.seganestsangre == 1 && forms.seguquiambu_frm_atodo.foundset.seganestocular == 1 &&
		forms.seguquiambu_frm_atodo.foundset.seganestdecubi == 1){
			forms.seguquiambu_frm_atodo.foundset.seganestrepasaini = 1
			forms.seguquiambu_frm_atodo.foundset.segtipoanestrepi = 9
			forms.seguquiambu_frm_atodo.foundset.seglegaanestrepi = 999999
		}
	else {
		if (forms.seguquiambu_frm_atodo.foundset.seganestrepasaini == 0){
			forms.seguquiambu_frm_atodo.foundset.seganestrepasaini = 1
			}
		else {
			if (forms.seguquiambu_frm_atodo.foundset.seganestrepasaini == 1){
				forms.seguquiambu_frm_atodo.foundset.seganestrepasaini = 2
				}
		}
		forms.seguquiambu_frm_atodo.foundset.segtipoanestrepi = forms.seguquiambu_frm_atodo.foundset.segtipoanestini
		forms.seguquiambu_frm_atodo.foundset.seglegaanestrepi = forms.seguquiambu_frm_atodo.foundset.seglegaanestini
	}
	
	if (forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini == 0){
		forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini = 1
		}
	else {
		if (forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini == 1){
			forms.seguquiambu_frm_atodo.foundset.seginstrurepasaini = 2
			}
	}
	
	if (forms.seguquiambu_frm_atodo.foundset.seginstrugasasini == 0){
		forms.seguquiambu_frm_atodo.foundset.seginstrugasasini = 1
		}
	else {
		if (forms.seguquiambu_frm_atodo.foundset.seginstrugasasini == 1){
			forms.seguquiambu_frm_atodo.foundset.seginstrugasasini = 2
			}
	}
	
	try{
		databaseManager.saveData(forms.seguquiambu_frm_atodo.foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.seguquiambu_frm_atodo.foundset)
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
	if(forms.seguquiambu_frm_atodo.foundset.seglegainstruini==0){
		globals.LegajoApeynomCirculante=''
	}
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_atodo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D59C4293-0676-42EE-BE1D-72093F66D92F"}
 */
function onAction_busca_seglegainstruini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Instrumentadora";
	win.setSize(850,550)
	win.show(forms.seguquiambu_frm_busqueda_personal)
	foundset.seglegainstruini=globals.segambu_vCodigoMedicoSegu
	globals.segambu_vApeynomEquipo=globals.segambu_vApeynomMedicoSegu
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FF51915-595F-459D-A5D0-C564E4BE98F1"}
 * @AllowToRunInFind
 */
function onAction_legajo_atodo(event) {
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
			globals.segambu_vApeynomEquipo=fs['per_apelnom']
			forms.seguquiambu_frm_atodo.foundset.seglegainstruini=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_atodo.requestFocus()
		}else{
			globals.segambu_vApeynomEquipo='Legajo Inexistente'
			forms.seguquiambu_frm_atodo.foundset.seglegainstruini=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Instrumentadora";
			win.setSize(850,550)
			win.show(forms.seguquiambu_frm_busqueda_personal)
			forms.seguquiambu_frm_acirculante.foundset.seglegainstruini=globals.segambu_vCodigoMedicoSegu
			globals.segambu_vApeynomEquipo=globals.segambu_vApeynomMedicoSegu
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_atodo.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B181706-A001-4C3C-9451-166E38F23537"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_atodo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
