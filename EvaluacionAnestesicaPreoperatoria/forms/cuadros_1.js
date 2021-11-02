/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C9A9497-7662-4185-BEA2-885DF5852E4B"}
 */
var vTilde1 = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBBEE1D3-2CC1-42EA-9D7D-05742C87A797"}
 */
function onAction_btn_1(event) {
	globals.tabIndice = 2
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 2
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(2)
	forms.frm_complic_preope.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECF12854-18C6-4514-B6C1-29F963A1FCDD"}
 */
function onAction_btn_2(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 3
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(3)
	forms.frm_clinica_preope.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA8AF65B-2F0E-424A-8A06-F3D2D5EF084F"}
 */
function onAction_btn_3(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 4
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(4)
	forms.frm_tratam_previos.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99B5D6C4-7C8C-4AC9-BB00-A35E92444E47"}
 */
function onAction_btn_4(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 5
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(5)
	forms.frm_exam_cabeza_cuello.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12766381-FC41-4825-9E61-9DEAC1699FE9"}
 */
function onAction_btn_6(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 7
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(7)
	forms.frm_exam_complemen.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C58047FB-3A8F-4E9C-A697-9DFE022B8A35"}
 */
function onAction_btn_5(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 6
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(6)
	forms.frm_anes_regional.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF532E75-0C85-487B-8FD8-94F55FE57A65"}
 */
function onAction_btn_7(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 8
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(8)
	forms.frm_psi_pre.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BEBEA77E-6240-4A2E-B7F3-9E227E0F61E4"}
 */
function onAction_btn_8(event) {
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 9
	globals.tables = forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.getTabFormNameAt(9)
	forms.frm_exa_esp.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E60DA21F-BA52-4F3A-AF8C-2D3B97C997F2"}
 */
function onAction_graba(event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
	 if (!globals.vExisteAnestesia){
	   vhisclin_to_tbc_anestesia.anes_histclin = globals.vHiscli
	   var date = utils.timestampToDate(application.getServerTimeStamp());
	   var fec = new Date()
	   vhisclin_to_tbc_anestesia.anes_feccarga = utils.stringToNumber(globals.FormatearFecha(fec,'AAAAMMDD'))
	   vhisclin_to_tbc_anestesia.anes_horcarga = utils.stringToNumber(globals.FormatearFecha(fec,'HHMM'))
	   
	   //plugins.dialogs.showInfoDialog("date",vhisclin_to_tbc_anestesia.anes_feccarga)
	   //plugins.dialogs.showInfoDialog("timee",vhisclin_to_tbc_anestesia.anes_horcarga)
	   /**
	   muevo_Cheks_aGrabar('frm_anes_regional')
	   muevo_Cheks_aGrabar('frm_clinica_preope')
	   muevo_Cheks_aGrabar('frm_complic_preope')
	   muevo_Cheks_aGrabar('frm_exa_esp')
	   muevo_Cheks_aGrabar('frm_exam_cabeza_cuello')
	   muevo_Cheks_aGrabar('frm_exam_complemen')
	   muevo_Cheks_aGrabar('frm_tratam_previos')
	   muevo_Cheks_aGrabar('frm_psi_pre')
	   */
	}   
	/**vhisclin_to_tbc_anestesia.anes_tipocir = utils.numberFormat(globals.vTipoCirugia.substr(0,1),0)
	vhisclin_to_tbc_anestesia.anes_escalam = utils.numberFormat(globals.vMallampati.substr(0,1),0)
	vhisclin_to_tbc_anestesia.anes_secreali = utils.numberFormat(globals.vEvalReali.substr(0,1),0)
	*/
	vhisclin_to_tbc_anestesia.anes_interven = globals.vInterven
	var hora_aux = globals.vHoraInicio
	globals.vHoraInicio = globals.vHoraInicio.replace(":","")
	vhisclin_to_tbc_anestesia.anes_horini = globals.vHoraInicio
	globals.vHoraInicio=hora_aux
	
	if(globals.vTipoInterv == "Urgente"){
		vhisclin_to_tbc_anestesia.anes_tipoint = 1
	}
	else {
		vhisclin_to_tbc_anestesia.anes_tipoint = 0
	}
	//plugins.dialogs.showInfoDialog("largo alldataproviders",vhisclin_to_tbc_anestesia.alldataproviders.length)
	
	vhisclin_to_tbc_anestesia.anes_codlegamed=globals.vLegajoAnestesista
	vhisclin_to_tbc_anestesia.anes_tiplegamed=globals.vLegajoAnestesistaIE
	try {
		databaseManager.saveData(vhisclin_to_tbc_anestesia.getRecord(1))
		forms.cuadros_1.elements.btn_informe.enabled = true
		forms.cuadros_1.elements.btn_informe.requestFocus()
	}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al Grabar ANESTESIA. Avise a Sistemas, por favor!",msg.toString(),"ok"))
	//	application.output(msg.rhinoException.getMessage())
	}
	var error1=''
	var error2=''
	var array = databaseManager.getFailedRecords(vhisclin_to_tbc_anestesia)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
	// exception thrown in pre-insert/update/delete event method
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de Evaluación Pre-anestésica",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Evaluación Pre-anestésica",error2,"Ok")
	}
	globals.vFeccarga = vhisclin_to_tbc_anestesia.anes_feccarga
	globals.vHorcarga = vhisclin_to_tbc_anestesia.anes_horcarga
	forms.frm_anestesia_preoperatoria_dtl.onAction_hiscli()
	}else{
		plugins.dialogs.showInfoDialog("Atención","Debe completar los datos cabecera antes de grabar")
    }	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69386F22-5B65-4754-B5E1-FD78250A4B27"}
 */
function onAction_btnInforme(event) {
	globals.txt_1 = globals.vHiscli
	globals.vHiscli1 = globals.vHiscli
	globals.vHisclin = globals.vHiscli
	globals.txt_1g = 1
	globals.vPacApeynom=vhisclin_to_tbc_admision.adm_apelnom
	globals.vTipoTexto = "1.- Informe de Evaluación Pre-anestésica"
	
	globals.names_campos[0] = "anestxt_protocolo"
	globals.names_campos[1] = "anestxt_grupo"
	globals.names_campos[2] = "anestxt_nro1"
	globals.names_campos[3] = "anestxt_secuen"
	globals.names_campos[4] = "anestxt_linea"
	globals.names_campos[5] = "anestxt_tope"
	globals.names_campos[6] = "anestxt_filler"
	globals.frm_txt = "tbarchtxt"
	globals.vServer = "asistencial"
	globals.vTabla = "tbc_aneste_txt"	
	globals.vTipoTxt1 = "Historia Clínica: " 
	var w1 = application.createWindow("d",JSWindow.MODAL_DIALOG)
	w1.title = "Ingreso de Observaciones";
		
	//forms.tbarchtxt.controller.show(w1)
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex=10
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02A37F54-1F54-4D59-A9DB-3A657DD69D39"}
 */
function onAction_cancela(event) {
	//application.exit()
	//history.back()
	application.showForm("frm_menu_principal")
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E3D680F2-C15A-4BE7-AC3F-3EED71813ED4"}
 */
function onShow_cuadros(firstShow, event) {
	if (globals.vHiscli > 0){
	for (var i = 0; i < forms.cuadros_1.elements.allnames.length; i++) {

        var name = forms.cuadros_1.elements.allnames[i];   // nombre de el elemento

        var elem = forms.cuadros_1.elements[name];         // propiedades del elemento

      
        
        //plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
       // plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
        if (elem.getElementType() == 'BUTTON') {
        	 switch (name){
        	    case "btn_1":forms.cuadros_1.elements.btn_1.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_complic_preope")){forms.cuadros_1.elements.btn_1.imageURL = "media:///check.png" };break;
        	    case "btn_2":forms.cuadros_1.elements.btn_2.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_clinica_preope"))forms.cuadros_1.elements.btn_2.imageURL = "media:///check.png" ;break;
        	    case "btn_3":forms.cuadros_1.elements.btn_3.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_tratam_previos"))forms.cuadros_1.elements.btn_3.imageURL = "media:///check.png" ;break;
        	    case "btn_4":forms.cuadros_1.elements.btn_4.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exam_cabeza_cuello"))forms.cuadros_1.elements.btn_4.imageURL = "media:///check.png" ;break;
        	    case "btn_5":forms.cuadros_1.elements.btn_5.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_anes_regional"))forms.cuadros_1.elements.btn_5.imageURL = "media:///check.png" ;break;
        	    case "btn_6":forms.cuadros_1.elements.btn_6.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exam_complemen"))forms.cuadros_1.elements.btn_6.imageURL = "media:///check.png" ;break;
        	    case "btn_7":forms.cuadros_1.elements.btn_7.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_psi_pre"))forms.cuadros_1.elements.btn_7.imageURL = "media:///check.png" ;break;
        	    case "btn_8":forms.cuadros_1.elements.btn_8.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exa_esp"))forms.cuadros_1.elements.btn_8.imageURL = "media:///check.png" ;break;
        	 }
        }
	} 
  }
}

/**
 * @properties={typeid:24,uuid:"EA1DEB9B-7D64-4F45-909E-B7F7057CFC3A"}
 */
function validoIngresoCheks(form) {
	var tieneCheks = false;
	for (var i = 0; i < forms[form].elements.allnames.length && !tieneCheks; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

        
        
        if (elem.getElementType() == 'CHECK') {
        	//application.output(name)
        	//application.output(forms[form].foundset[name])
        	switch (forms[form].foundset[name]){
    	          case "X": tieneCheks = true;break;
    	          case "x": tieneCheks = true;break;
    	          case "1": tieneCheks = true;break;
        	}
          
        }
     }
  if (tieneCheks){
	  return true
  }
  else{
	  return false
  }
}

/**
 * @properties={typeid:24,uuid:"1A528B47-1355-44B6-BB14-7D91D6E3F831"}
 */
function muevo_Cheks_aGrabar(form) {
	//plugins.dialogs.showInfoDialog("form",form)
	//plugins.dialogs.showInfoDialog("length",forms[form].elements.allnames.length)
	for (var i = 0; i < forms[form].elements.allnames.length; i++){ 
		
	 var name = forms[form].elements.allnames[i];   // nombre de el elemento

     var elem = forms[form].elements[name];         // propiedades del elemento
     
     
     if (elem.getElementType() == 'CHECK') {
    	
        if(forms[form].foundset[name]==null){
        	forms[form].foundset[name]=' '
        }
        vhisclin_to_tbc_anestesia[name]=forms[form].foundset[name]
       
     }
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A49442FE-BB43-452C-A075-163A2BEFEFFB"}
 */
function onShow_cuadros_1(firstShow, event) {
	
	 //globals.onShow_cuadros()
}
