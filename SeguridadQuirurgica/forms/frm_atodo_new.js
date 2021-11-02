/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB0AAB6B-C51A-4383-90C4-A1A08B1BBF98"}
 * @AllowToRunInFind
 */
function onShowATodo(firstShow, event) {
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
	if (globals.vexistesegu == 'N'){
		forms.frm_atodo_new.foundset.newRecord()
		globals.InicializarDatos('frm_atodo_new','asistencial','tbc_seguqui_new')
	}else{
		forms.frm_atodo_new.foundset.find()
		forms.frm_atodo_new.foundset.segtipohc1 = 0
		forms.frm_atodo_new.foundset.seghistclinica1  = globals.vhiscli
		forms.frm_atodo_new.foundset.segprotocolo = globals.vprotocolo
		forms.frm_atodo_new.foundset.search()
		if (forms.frm_atodo_new.foundset.seganestident == 1 && forms.frm_atodo_new.foundset.seganestpulso == 1 &&
			forms.frm_atodo_new.foundset.seganestseguri == 1 && forms.frm_atodo_new.foundset.seganestalergia == 1 &&
			forms.frm_atodo_new.foundset.seganestviaaerea == 1 && forms.frm_atodo_new.foundset.seganestacceso == 1 &&
			forms.frm_atodo_new.foundset.seganestsangre == 1 && forms.frm_atodo_new.foundset.seganestocular == 1 &&
			forms.frm_atodo_new.foundset.seganestdecubi == 1){
				forms.frm_atodo_new.elements.chk_anest_repasa_ini_1.visible = false
				forms.frm_atodo_new.elements.chk_anest_repasa_ini_2.visible = false
				forms.frm_atodo_new.elements.lbl_anes.visible = true
		}
		else {
				if (forms.frm_atodo_new.foundset.seganestrepasaini == 1){
					forms.frm_atodo_new.foundset.seganestrepasaini = 0
				}
				else {
					if (forms.frm_atodo_new.foundset.seganestrepasaini == 2){
						forms.frm_atodo_new.foundset.seganestrepasaini = 1
					}
				}
				forms.frm_atodo_new.elements.chk_anest_repasa_ini_1.visible = true
				forms.frm_atodo_new.elements.chk_anest_repasa_ini_2.visible = true
				forms.frm_atodo_new.elements.lbl_anes.visible = false
		}
	
		if (forms.frm_atodo_new.foundset.seginstrurepasaini == 1){
			forms.frm_atodo_new.foundset.seginstrurepasaini = 0
		}
		else {
			if (forms.frm_atodo_new.foundset.seginstrurepasaini == 2){
				forms.frm_atodo_new.foundset.seginstrurepasaini = 1
			}
		}
		if (forms.frm_atodo_new.foundset.seginstrugasasini == 1){
			forms.frm_atodo_new.foundset.seginstrugasasini = 0
		}
		else {
			if (forms.frm_atodo_new.foundset.seginstrugasasini == 2){
				forms.frm_atodo_new.foundset.seginstrugasasini = 1
			}
		}
	
		if (forms.frm_atodo_new.foundset.seginstrupinzasini == 1){
			globals.vantinstru = 'No'
		}
		else {
			if (forms.frm_atodo_new.foundset.seginstrupinzasini == 2){
				globals.vantinstru = 'Si'
			}
		}
		globals.vApeynomEquipo=seglegainstruini_to_tbc_personal.per_apelnom
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C8EF7D8-F860-403D-A90B-8D2FF79D76AA"}
 */
function GrabaATodo(event) {
	//plugins.dialogs.showInfoDialog("vaninstru",globals.vantinstru)
	if (globals.vantinstru == 'No'){
		forms.frm_atodo_new.foundset.seginstrupinzasini = 1
		}
	else {
		if (globals.vantinstru == 'Si'){
			forms.frm_atodo_new.foundset.seginstrupinzasini = 2
		}
	}
	
	if (forms.frm_atodo_new.foundset.seganestident == 1 && forms.frm_atodo_new.foundset.seganestpulso == 1 &&
		forms.frm_atodo_new.foundset.seganestseguri == 1 && forms.frm_atodo_new.foundset.seganestalergia == 1 &&
		forms.frm_atodo_new.foundset.seganestviaaerea == 1 && forms.frm_atodo_new.foundset.seganestacceso == 1 &&
		forms.frm_atodo_new.foundset.seganestsangre == 1 && forms.frm_atodo_new.foundset.seganestocular == 1 &&
		forms.frm_atodo_new.foundset.seganestdecubi == 1){
			forms.frm_atodo_new.foundset.seganestrepasaini = 1
			forms.frm_atodo_new.foundset.segtipoanestrepi = 9
			forms.frm_atodo_new.foundset.seglegaanestrepi = 999999
		}
	else {
		if (forms.frm_atodo_new.foundset.seganestrepasaini == 0){
			forms.frm_atodo_new.foundset.seganestrepasaini = 1
			}
		else {
			if (forms.frm_atodo_new.foundset.seganestrepasaini == 1){
				forms.frm_atodo_new.foundset.seganestrepasaini = 2
				}
		}
		forms.frm_atodo_new.foundset.segtipoanestrepi = forms.frm_atodo_new.foundset.segtipoanestini
		forms.frm_atodo_new.foundset.seglegaanestrepi = forms.frm_atodo_new.foundset.seglegaanestini
	}
	
	if (forms.frm_atodo_new.foundset.seginstrurepasaini == 0){
		forms.frm_atodo_new.foundset.seginstrurepasaini = 1
		}
	else {
		if (forms.frm_atodo_new.foundset.seginstrurepasaini == 1){
			forms.frm_atodo_new.foundset.seginstrurepasaini = 2
			}
	}
	
	if (forms.frm_atodo_new.foundset.seginstrugasasini == 0){
		forms.frm_atodo_new.foundset.seginstrugasasini = 1
		}
	else {
		if (forms.frm_atodo_new.foundset.seginstrugasasini == 1){
			forms.frm_atodo_new.foundset.seginstrugasasini = 2
			}
	}
	
	
	databaseManager.saveData(forms.frm_atodo_new.foundset.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(forms.frm_atodo_new.foundset)
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
	if(forms.frm_atodo_new.foundset.seglegainstruini==0){
		globals.LegajoApeynomCirculante=''
	}
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_atodo_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"886D2DA1-E30B-4E40-8496-A4D3B6CE418B"}
 */
function onAction_busca_seglegainstruini(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Instrumentadora";
	win.setSize(850,550)
	win.show(forms.frm_busqueda_personal)
	foundset.seglegainstruini=globals.vCodigoMedicoSegu
	globals.vApeynomEquipo=globals.vApeynomMedicoSegu
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43E6A22C-06B6-4DD8-82C0-7FE0E57D49B1"}
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
			globals.vApeynomEquipo=fs['per_apelnom']
			forms.frm_atodo_new.foundset.seglegainstruini=fs['per_legajo']
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_atodo.requestFocus()
		}else{
			globals.vApeynomEquipo='Legajo Inexistente'
			forms.frm_atodo_new.foundset.seglegainstruini=0
			globals.LegajoApeynomCirculante=''
		}
    }
    else{
    	    globals.vLegajoAlfa = globals.LegajoApeynomCirculante.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Instrumentadora";
			win.setSize(850,550)
			win.show(forms.frm_busqueda_personal)
			forms.frm_acirculante_new.foundset.seglegainstruini=globals.vCodigoMedicoSegu
			globals.vApeynomEquipo=globals.vApeynomMedicoSegu
			globals.LegajoApeynomCirculante=''
			elements.btn_graba_atodo.requestFocus()
    }
	
}
