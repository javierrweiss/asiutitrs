/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered thvhiscli_to_admisione action
 *
 * @properties={typeid:24,uuid:"6843610B-A9A6-4072-B0F2-EBABA79ED19D"}
 * @AllowToRunInFind
 */
function onShowAAnestesiologo(firstShow, event) {
	databaseManager.revertEditedRecords()
	if (globals.segambu_vanestesia == '  Si  '){
		if (globals.segambu_existesegu == 'N'){
			globals.segambu_valergia = '  '
			forms.seguquiambu_frm_aanestesiologo.foundset.newRecord()
			globals.InicializarDatos('seguquiambu_frm_aanestesiologo','asistencial','tbc_seguqui_new')
		}
	    else {
	    	forms.seguquiambu_frm_aanestesiologo.foundset.find()
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc = 1
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica  = globals.vHiscli
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segfechacarga = globals.segambu_fecha_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.search()
	    	
	    	if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia == 1){
	    		globals.segambu_valergia = 'No' 
	    		forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=false
				forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=false
	    		}
	    	else {
	    		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia == 2){
	    			globals.segambu_valergia = 'Si'
	    			forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=true
					forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=true
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 0
				}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 0
				}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 1
				}
			}
			globals.segambu_vApeynomAnestesiologo=segambulegaanestini_to_tbc_medicos_personal.medperapeynom

		}
	}
	else {
		if (globals.segambu_existesegu == 'N'){
	    	forms.seguquiambu_frm_aanestesiologo.foundset.newRecord()
      		globals.InicializarDatos('seguquiambu_frm_aanestesiologo','asistencial','tbc_seguqui_new')
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia  = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestcuales   = ' '
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestini  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestrepasaini = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestrepi  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestrepi = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestplan          = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestfin     = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestfin    = 999999

			globals.segambu_existesegu = 'S'
		}
		else {
			forms.seguquiambu_frm_aanestesiologo.foundset.find()
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc = 1
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica  = globals.vHiscli
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segfechacarga = globals.segambu_fecha_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.search()
                  
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia  = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestcuales   = ' '
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestini  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestrepasaini = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestrepi  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestrepi = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestplan       = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestfin  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestfin = 999999
		}
		
		databaseManager.saveData(forms.seguquiambu_frm_aanestesiologo.foundset.getRecord(1))
		forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6B4BA07-9CD3-41E5-8951-587FC5ACD80E"}
 */
function GrabaAAnestesiologo(event) {
	if (globals.segambu_existesegu == 'N'){
		forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc = 1
		forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc1 = 1
		forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica   = globals.vHiscli
		forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica1 = globals.vHiscli
		
		forms.seguquiambu_frm_aanestesiologo.foundset.segfechacarga  = globals.segambu_fecha_ingreso
		forms.seguquiambu_frm_aanestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
		forms.seguquiambu_frm_aanestesiologo.foundset.segprotocolo = 0
		/*
		if (globals.segambu_valergia == 'No'){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = 1
			}
		else {
			if (globals.segambu_valergia == 'Si'){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = 2
			}
			else {
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = 0
			}
		}
		*/
		//application.output(globals.segambu_valergia)
		//forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = globals.segambu_valergia
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 2
			}
		}
		globals.segambu_existesegu = 'S'
		globals.segambu_vexistesegu = 'S'
		//databaseManager.saveData()
	}
	else {
		/*
		if (globals.segambu_valergia == 'No'){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = 1
			}
		else {
			if (globals.segambu_valergia == 'Si'){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = 2
			}
		}
		*/
		//application.output(globals.segambu_valergia)
		//forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia = globals.segambu_valergia
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 2
			}
		}
		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 0){
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 1
			}
		else {
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 2
			}
		}
	}
	//databaseManager.saveData()

	
	try{
		databaseManager.saveData(foundset.getRecord(1))
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(foundset)
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
	//databaseManager.refreshRecordFromDatabase(forms.frm_aanestesiologo_new.foundset, 1)
	if(forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini==0){
		globals.LegajoApeynomAnes=''
	}
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_aanestesiologo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49FF4EC6-5551-49E2-B318-E1864D5628EC"}
 */
function onAction_aanestesiologo(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Anestesiólogo";
	win.setSize(850,550);
	win.show(forms.seguquiambu_frm_busqueda_medicos_personal);
	foundset.seglegaanestini=globals.segambu_vCodigoMedicoSegu;
	globals.segambu_vApeynomAnestesiologo=globals.segambu_vApeynomMedicoSegu;
	elements.btn_graba_aanestesiologo.requestFocus();
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
 * @properties={typeid:24,uuid:"78359BB6-D219-4B70-80E1-96AA334D80A4"}
 */
function onDataChange_Alergias(oldValue, newValue, event) {
	if(newValue==2){
		forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=true
		forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=true
	}else{
		forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=false
		forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=false
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"BD1245A6-5505-472E-8D4D-1A5811DDEC01"}
 * @AllowToRunInFind
 */
function MuestroAnestesiologo() {
	if (globals.segambu_vanestesia == '  Si  '){
		if (globals.segambu_existesegu == 'N'){
			globals.segambu_valergia = '  '
			forms.seguquiambu_frm_aanestesiologo.foundset.newRecord()
			globals.InicializarDatos('seguquiambu_frm_aanestesiologo','asistencial','tbc_seguqui_new')
			
		}
	    else {
	    	
	    	forms.seguquiambu_frm_aanestesiologo.foundset.find()
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc = 1
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica  = globals.vHiscli
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segfechacarga = globals.segambu_fecha_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.search()
			
	    	
	    	if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia == 1){
	    		globals.segambu_valergia = 'No' 
	    		forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=false
				forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=false
	    		}
	    	else {
	    		if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia == 2){
	    			globals.segambu_valergia = 'Si'
	    			forms.seguquiambu_frm_aanestesiologo.elements.anest_cuales.visible=true
					forms.seguquiambu_frm_aanestesiologo.elements.cuales.visible=true
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestident == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestident = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 0
			}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 0
				}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular = 1
				}
			}
			if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 1){
				forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 0
				}
			else {
				if (forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi == 2){
					forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi = 1
				}
			}
			globals.segambu_vApeynomAnestesiologo=segambulegaanestini_to_tbc_medicos_personal.medperapeynom

		}
	}
	else {
		if (globals.segambu_existesegu == 'N'){
	    	forms.seguquiambu_frm_aanestesiologo.foundset.newRecord()
      		globals.InicializarDatos('seguquiambu_frm_aanestesiologo','asistencial','tbc_seguqui_new')
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia  = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestcuales   = ' '
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestini  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestrepasaini = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestrepi  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestrepi = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestplan          = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestfin     = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestfin    = 999999

			globals.segambu_existesegu = 'S'
		}
		else {
			
			forms.seguquiambu_frm_aanestesiologo.foundset.find()
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segtipohc = 1
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghistclinica  = globals.vHiscli
	    	forms.seguquiambu_frm_aanestesiologo.foundset.segfechacarga = globals.segambu_fecha_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.seghoracarga = globals.segambu_hora_ingreso
	    	forms.seguquiambu_frm_aanestesiologo.foundset.search()
	    	
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestident    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestpulso    = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestseguri   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestalergia  = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestcuales   = ' '
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestviaaerea = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestacceso   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestsangre   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestocular   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestdecubi   = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestini  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestrepasaini = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestrepi  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestrepi = 999999
			forms.seguquiambu_frm_aanestesiologo.foundset.seganestplan       = 1
			forms.seguquiambu_frm_aanestesiologo.foundset.segtipoanestfin  = 9
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestfin = 999999
		}
		
		try{
			databaseManager.saveData(foundset.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var error1 = ''
		var error2 = ''
		var array = databaseManager.getFailedRecords(foundset)
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
		forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B553E72-76E4-47ED-8209-2535B2E8D9F1"}
 * @AllowToRunInFind
 */
function onAction_legajo_anestesiologo(event) {
	var largo = globals.LegajoApeynomAnes.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.LegajoApeynomAnes.charCodeAt(i)< 48 || globals.LegajoApeynomAnes.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_medicos_personal')
		fs.find()
		fs['medpercod']=utils.stringToNumber(globals.LegajoApeynomAnes.substr(0,largo-1))
		fs.search()
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			if(fs['medperesp']==24){		
				globals.segambu_vApeynomAnestesiologo=fs['medperapeynom']
				forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini=fs['medpercod']
				globals.LegajoApeynomAnes=''
				elements.btn_graba_aanestesiologo.requestFocus()
			}else{
				globals.segambu_vApeynomAnestesiologo='El Profesional No es un Anestesiólogo'
				forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini=0
				globals.LegajoApeynomAnes=''
			}
		}else{
			globals.segambu_vApeynomAnestesiologo='Profesional Inexistente'
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini=0
			globals.LegajoApeynomAnes=''
		}
    }
    else{
    	    globals.vProfeAlfa = globals.LegajoApeynomAnes.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Anestesiólogo";
			win.setSize(850,550)
			win.show(forms.seguquiambu_frm_busqueda_medicos_personal)
			forms.seguquiambu_frm_aanestesiologo.foundset.seglegaanestini=globals.segambu_vCodigoMedicoSegu
			globals.segambu_vApeynomAnestesiologo=globals.segambu_vApeynomMedicoSegu
			globals.LegajoApeynomAnes=''
			elements.btn_graba_aanestesiologo.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A1EA1A6-DEBA-4A1D-8A99-21705A2E132E"}
 */
function onAction_volver(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=true
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_aanestesiologo')
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
}
