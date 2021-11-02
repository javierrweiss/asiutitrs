/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A74DC20B-FFB5-4D74-B775-EA67A73DBA01"}
 */
function onAction_btn_1(event) {
	application.showForm(forms.cuadros)
	forms.cuadros.elements.tabless_15.tabIndex = 1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67DF7253-7F9B-4576-BC23-DB8EBB95A0D2"}
 */
function onAction_btn_2(event) {
	application.showForm(forms.cuadros)
	forms.cuadros.elements.tabless_15.tabIndex = 2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B14565F2-A972-4BC3-9DB9-9544E9405A27"}
 */
function onAction_btn_3(event) {
	application.showForm(forms.cuadros)
	forms.cuadros.elements.tabless_15.tabIndex = 3
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F60A0B67-28C7-443F-BE57-B07CCBB46449"}
 */
function onShow_anestesia_preope(firstShow, event) {
	//plugins.dialogs.showInfoDialog("onShow","1")
	var form = "frm_anestesia_preoperatoria_dtl"
	var base = "asistencial"
    var tabla = "tbc_anestesia"	
	var name = '';
	var largo = forms.frm_anestesia_preoperatoria_dtl.elements.allnames.length
	for (var i=0;i<largo;i++){
		name = forms.frm_anestesia_preoperatoria_dtl.elements.allnames[i]
		forms.frm_anestesia_preoperatoria_dtl.elements[name].enabled = false
		//application.output(name)
	}
	forms.frm_anestesia_preoperatoria_dtl.elements.hiscli.enabled = false
	controlo_Admision()
	//globals.ControlAlerta(0,globals.vHiscli,1,0)
	onAction_hiscli()
	
	
	//globals.onShow_cuadros()
	//dc_edit(event,'svy_nav_fr_buttonbar_viewer')
	//elements.interven.requestFocus()
	//forms.frm_anestesia_preoperatoria_dtl.elements.interven.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"CD46AAEB-EDB4-4161-9671-09B420FA26AE"}
 * @AllowToRunInFind
 */
function onAction_hiscli() {
	vs_to_tbc_anestesia.loadAllRecords()
	var existe1 = vs_to_tbc_anestesia.getSize()
	//globals.ControlAlerta(0,globals.vHisclin,1,0)
	var name;
	var largo;
	var i=0;
	var fecha_nac = vhisclin_to_tbc_admision.adm_fecnac
	if (fecha_nac!=null){
	    	globals.vEdad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad
	}
	//* @param {JSEvent} event the event that triggered the action
	//if (vhisclin_to_tbc_anestesia.search()>0){
	if (existe1 > 0 && globals.vSeleccionoRegistro){
		globals.vFeccarga = vs_to_tbc_anestesia.anes_feccarga
		globals.vHorcarga = vs_to_tbc_anestesia.anes_horcarga
		globals.vExisteAnestesia=true
		/**
		forms.frm_anestesia_preoperatoria_dtl.foundset.find()
		forms.frm_anestesia_preoperatoria_dtl.foundset.anes_histclin = globals.vHiscli
		//forms.frm_anestesia_preoperatoria_dtl.foundset.anes_estado = '<='+globals.vAnesEstado
		forms.frm_anestesia_preoperatoria_dtl.foundset.anes_feccarga = vs_to_tbc_anestesia.anes_feccarga
		forms.frm_anestesia_preoperatoria_dtl.foundset.anes_horcarga = vs_to_tbc_anestesia.anes_horcarga
		forms.frm_anestesia_preoperatoria_dtl.foundset.search()
		*/
		//application.output(forms.frm_anestesia_preoperatoria_dtl.foundset.getSize())
		name = '';
		largo = forms.frm_anestesia_preoperatoria_dtl.elements.allnames.length
		for (i=0;i<largo;i++){
			name = forms.frm_anestesia_preoperatoria_dtl.elements.allnames[i]
			forms.frm_anestesia_preoperatoria_dtl.elements[name].enabled = true
			//application.output(name)
		}
	
		forms.frm_anestesia_preoperatoria_dtl.elements.hiscli.enabled = false
		
		globals.vInterven = vhisclin_to_tbc_anestesia.anes_interven  //fs['anes_interven']
		globals.vTipoInterv = vhisclin_to_tbc_anestesia.anes_tipoint //fs['anes_tipoint']
		globals.vEvalReali = vhisclin_to_tbc_anestesia.anes_secreali //fs['anes_secreali']
		globals.vHoraInicio = vhisclin_to_tbc_anestesia.anes_horini //fs['anes_horini']
		switch (globals.vHoraInicio.length){
			case 1 : globals.vHoraInicio = '0:0'+globals.vHoraInicio.substr(0,1);break;
			case 2 : globals.vHoraInicio = '0:'+globals.vHoraInicio.substr(0,2);break;
			case 3 : globals.vHoraInicio = globals.vHoraInicio.substr(0,1)+":"+globals.vHoraInicio.substr(1,2);break;
			case 4 : globals.vHoraInicio = globals.vHoraInicio.substr(0,2)+":"+globals.vHoraInicio.substr(2,2);break; 
		}
		/**
		globals.vTipoCirugia = vhisclin_to_tbc_anestesia.anes_tipocir //fs['anes_tipocir']
		globals.vMallampati = vhisclin_to_tbc_anestesia.anes_escalam //fs['anes_escalam']
		switch (globals.vMallampati.substr(0,1)){
			case "1" : globals.vMallampati = "1.- Gr. I  Se ve paladar blando-uvula-pil.far.";break;
			case "2" : globals.vMallampati = "2.- Gr. II - Se uvula con dificultad, no pil.far.";break;
			case "3" : globals.vMallampati = "3.- Gr. III - No se visualiza paladar blando";break;
			case "4" : globals.vMallampati = "4.- Gr. IV - Sólo se visualiza paladar duro";break;
		}	
		switch (globals.vEvalReali.substr(0,1)){
		case "1" : globals.vEvalReali = "1.- Circuito cerrado   ";break;
		case "2" : globals.vEvalReali = "2.- Piso de Internación";break;
		case "3" : globals.vEvalReali = "3.- Unidad Quirúrgica  ";break;
		case "4" : globals.vEvalReali = "4.- Guardia            ";break;
	    }
	    switch (globals.vTipoCirugia.substr(0,1)){
		case "1" : globals.vTipoCirugia = "1.- Traumatológica           ";break;
		case "2" : globals.vTipoCirugia = "2.- Cardiovascular           ";break;
		case "3" : globals.vTipoCirugia = "3.- Cesárea                  ";break;
		case "4" : globals.vTipoCirugia = "4.- Gral.arriba del ang.Treiz";break;
		case "5" : globals.vTipoCirugia = "5.- Gral.debajo del ang.Treiz";break;
	    }	
	    */
	    globals.vPacApeynom = vhisclin_to_tbc_admision.adm_apelnom
	    if (vhisclin_to_tbc_anestesia.anes_tipoint == 0){
			globals.vTipoInterv = "Programada"
		}
		else{
			globals.vTipoInterv = "Urgente"
		}
	    
		MuestroEstadoBotonesChek()
		
	    forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 1
	   
	}
	else{
		if(globals.vSeleccionoRegistro){
		    vhisclin_to_tbc_anestesia.newRecord()
			globals.vExisteAnestesia=false
			
			InicializoNuevoRegistro("asistencial","tbc_anestesia","vhisclin_to_tbc_anestesia")
			
			name = '';
			largo = forms.frm_anestesia_preoperatoria_dtl.elements.allnames.length
			for (i=0;i<largo;i++){
				name = forms.frm_anestesia_preoperatoria_dtl.elements.allnames[i]
				forms.frm_anestesia_preoperatoria_dtl.elements[name].enabled = true
			}
			forms.frm_anestesia_preoperatoria_dtl.elements.hiscli.enabled = false
			if (!globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
				forms.cuadros_1.elements.btn_graba.enabled = false
				forms.cuadros_1.elements.btn_informe.enabled = false
			}
			forms.cuadros_1.elements.btn_1.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_2.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_3.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_4.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_5.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_6.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_7.imageURL = "media:///space.png"
			forms.cuadros_1.elements.btn_8.imageURL = "media:///space.png"
			forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 1
			//forms.frm_anestesia_preoperatoria_dtl.elements.interven.requestFocus()
			
		}	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2B648F6-77E7-4BDB-9FA6-C35D41415440"}
 */
function onAction_radio(event) {
	plugins.dialogs.showInfoDialog("valor radio",globals.vTipoInterv,"ok")
}

/**
 * @properties={typeid:24,uuid:"1DA5295A-1B19-4E6C-89F5-9041372F7875"}
 */
function controlo_Admision() {
	globals.vProtocolo = false
	globals.vSeleccionoRegistro = true
	/**
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Paciente Internado";
	//globals.muestroNuevoDataset("tbc_admisionN")
	win.show(forms.tbc_admision)
	if (globals.vSeleccionoRegistro){
	   if (vhisclin_to_tbc_admision.adm_fecepic>0){
		   if(vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami!=2){
		       plugins.dialogs.showErrorDialog("Estado de Paciente","Paciente con Alta Clinica","Ok")
		       controlo_Admision()
	       }else{
		       plugins.dialogs.showErrorDialog("Estado de Paciente","Paciente con Egreso Sanatorial","Ok")
		       controlo_Admision()
	       }  
	   }
	}else{
		controlo_Admision()
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1403EAD-3498-4D9D-94D6-347978F26FD5"}
 */
function onAction_Interven(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.show(forms.frm_busqueda_interven)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"17D3FEBE-CCEB-4647-96F6-4F527B23FFF1"}
 */
function onDataChange_HoraInicio(oldValue, newValue, event) {
  var resultado=0;
  var largo = newValue.length;
  var esnumero = true;
  for (var i= 0;i<largo && esnumero == true; i++){
		if (newValue.charCodeAt(i)< 48 || newValue.charCodeAt(i) > 57){
			esnumero = false
		}
  }
  if (esnumero){
    if(newValue>59&&newValue<100){
	  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
	  globals.vHoraInicio=oldValue
    }else{
	  if(newValue>2359){
		  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
		  globals.vHoraInicio=oldValue  
	  }else{
		  resultado=Math.floor(newValue/100);
		   resultado=resultado*100;
		  resultado=newValue-resultado;
		  if(resultado>59&&resultado<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  globals.vHoraInicio=oldValue    
		  }
	  }
    }
   globals.vHoraInicio = globals.vHoraInicio.replace(":","")
   globals.vHora = utils.stringToNumber(globals.vHoraInicio)
  globals.vHoraInicio=globals.FormatearHora()
 
  elements.pulsofrec.requestFocus()
  return true
  }else{
	  newValue=''
	  oldValue=''  
	  return false
  }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6BCA366-289E-4EE0-A4A1-8D186B68D8E3"}
 */
function onAction_Focus(event) {
	/**
	globals.tabseq = globals.tabseq + 1
	var tabSeq=controller.getTabSequence()
	if (globals.tabseq > tabSeq.length){
		controller.focusFirstField()
	}else{
		controller.focusField(tabSeq[globals.tabseq],true)
	    				
	}
	*/
	var tabSeq=controller.getTabSequence()

}

/**
 * @properties={typeid:24,uuid:"752EAEF2-DEC5-4E1B-B3E0-B77ADB442520"}
 */
function InicializoNuevoRegistro(base, tabla, relacion) {
	var table = databaseManager.getTable(base, tabla)
    var columnNamesArray = table.getColumnNames();
	for (var i = 0; i < foundset[relacion].alldataproviders.length; i++) {
        var name = foundset[relacion].alldataproviders[i];
        
        var columnNames = table.getColumnNames()
        
        var firstColumnName = columnNamesArray[i];
        var jscolumn = table.getColumn(firstColumnName);
        var columnLength = jscolumn.getLength();
        
        foundset[relacion][firstColumnName] = 0
       var columnType = jscolumn.getType();
       if (columnType == 12){
    	   foundset[relacion][firstColumnName] = ' '
         }
       
      
    }
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DEE4894B-32ED-47AD-BEBF-F0DE3E23F051"}
 */
function onDataChangeTipoCirugia(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			elements.mallampati.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F8682779-23FF-46BA-A794-C24BE0AD9EC1"}
 */
function onDataChangeMallampati(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			elements.evaluacion.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"44454B19-72CB-4F03-9DEB-8AAE3AFDE82B"}
 */
function onDataChange_Generico(oldValue, newValue, event) {
	//
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		forms.cuadros_1.elements.btn_1.requestFocus()
		
	}
	    var tabSeq=controller.getTabSequence()
		//plugins.dialogs.showInfoDialog("",tabSeq.length)
		var campo_next
		if (tabSeq.length > 0){
			for(var i=0;i<tabSeq.length;i++){
				if(event.getElementName()==tabSeq[i]){
					if(i==tabSeq.length-1){
						campo_next =  tabSeq[12]
						elements.tabless_246.tabIndex=1

						//application.output(campo_next)
						//application.output(tabSeq.length)
					}else{
						campo_next = tabSeq[i]
						if (campo_next != 'tabless_246'){
							if (campo_next == 'asa'){
								elements.tabless_246.tabIndex=1
							}else{
								campo_next = tabSeq[i+1]
					    	    elements[campo_next].requestFocus()
							}
						}
					}	
				}
			}
			
			
		}
		
     //}
   //}
   return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EEB1891-7C7B-4D7E-8BF0-C908E189ABF8"}
 */
function onShow_aneste_Focus(firstShow, event) {
	globals.vHisclin_mascara = globals.vHiscli.toString()
	elements.interven.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5408A6E2-E5CA-4640-BD64-442408CCDBCC"}
 */
function onAction_HoraInicio(event) {
	if (elements.horainicio == '' || elements.horainicio == ' ' || elements.horainicio ==null){
		elements.horainicio.requestFocus()
	}else{	
    	elements.pulsofrec.requestFocus()
	}
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26D30DA9-59B3-41EA-BFC2-CF2034C6EE81"}
 */
function onFocusGained(event) {
	var tabSeq=controller.getTabSequence()
}

/**
 * @properties={typeid:24,uuid:"2E53E24B-885A-4EEC-AEB7-83F784CB7A16"}
 */
function MuestroEstadoBotonesChek() {
	if (globals.vHiscli > 0){
		for (var i = 0; i < forms.cuadros_1.elements.allnames.length-1; i++) {

	        var name = forms.cuadros_1.elements.allnames[i];   // nombre de el elemento

	        var elem = forms.cuadros_1.elements[name];         // propiedades del elemento
	       		   
	        if (elem.getElementType() == 'BUTTON') {
	        	 switch (name){
	        	    case "btn_1":forms.cuadros_1.elements.btn_1.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_complipre_",9)){forms.cuadros_1.elements.btn_1.imageURL = "media:///check.png" };break;
	        	    case "btn_2":forms.cuadros_1.elements.btn_2.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_clinpre_",34)){forms.cuadros_1.elements.btn_2.imageURL = "media:///check.png" };break;
	        	    case "btn_3":forms.cuadros_1.elements.btn_3.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_tratprev_",20)){forms.cuadros_1.elements.btn_3.imageURL = "media:///check.png" };break;
	        	    case "btn_4":forms.cuadros_1.elements.btn_4.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_cabcue_",6)){forms.cuadros_1.elements.btn_4.imageURL = "media:///check.png" };break;
	        	    case "btn_5":forms.cuadros_1.elements.btn_5.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_anesregio_",6)){forms.cuadros_1.elements.btn_5.imageURL = "media:///check.png" };break;
	        	    case "btn_6":forms.cuadros_1.elements.btn_6.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_exacompl_",22)){forms.cuadros_1.elements.btn_6.imageURL = "media:///check.png" };break;
	        	    case "btn_7":forms.cuadros_1.elements.btn_7.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_psipre_",7)){forms.cuadros_1.elements.btn_7.imageURL = "media:///check.png" };break;
	        	    case "btn_8":forms.cuadros_1.elements.btn_8.imageURL = "media:///space.png"; if(validoIngresoCheksNew("anes_exaesp_",4)){forms.cuadros_1.elements.btn_8.imageURL = "media:///check.png" };break;
	        	 }
	        }
		} 
	  }
}

/**
 * @param {string} form
 * 
 * @properties={typeid:24,uuid:"C436E764-1B16-4685-A988-7C59118E756F"}
 */
function validoIngresoCheks(form) {
	var tieneCheks = false;
	var salir = false;
	
	var formu = new Array()
	formu=forms.frm_clinica_preope.elements.allnames
	
	for (var i = 0; i < (forms[form].elements.allnames.length-1) && !tieneCheks;i++){ // && !salir; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento
        
      
		if (elem.getElementType() == 'CHECK') {
        
           	
           	switch (vhisclin_to_tbc_anestesia[name]){
    	          case "X": tieneCheks = true;salir=true;break;
    	          case "x": tieneCheks = true;salir=true;break;
    	          case "1": tieneCheks = true;salir=true;break;
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
 * @param {string} form
 * @param {number} maximo
 * 
 * @properties={typeid:24,uuid:"4F3A708A-D566-4241-91FF-011BC3E4EDE6"}
 */
function validoIngresoCheksNew(form, maximo) {
	var tieneCheks = false;
	var salir = false;
	for (var i = 1; i < maximo && !tieneCheks;i++){

       var name = form + i;
       
           	//switch (forms[form].foundset[name]){
           	switch (vhisclin_to_tbc_anestesia[name]){
    	          case "X": tieneCheks = true;salir=true;break;
    	          case "x": tieneCheks = true;salir=true;break;
    	          case "1": tieneCheks = true;salir=true;break;
        	}
	}
     //plugins.dialogs.showInfoDialog("salir",salir)
  //plugins.dialogs.showInfoDialog("tiene chekcs",tieneCheks)	
  if (tieneCheks){
	  return true
  }
  else{
	  return false
  }
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C1ED8F0D-4510-4156-91AF-A3651E011C02"}
 */
function onDataChange_interven(oldValue, newValue, event) {
	if(vinterven_to_tbc_interven.getSize()>0){
		elements.tipointerven.requestFocus()
		return true
	}else{
		return false
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"74ED7DFB-7D30-4E74-92B3-84B6F430EBF6"}
 */
function onDataChange_tipointerven(oldValue, newValue, event) {
	elements.tipocirugia.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F6097ACE-0F7B-4C9C-8F1B-D215AD859AC6"}
 */
function onDataChange_evaluacion(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			elements.horainicio.requestFocus()
			return true
		}else{
			return false
		}
	
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6D254C46-8963-428B-B205-B2E88BBD9750"}
 */
function onDataChange_frecuencia(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			foundset.anes_pulsocarac='NORMAL'
			elements.pulsocarac.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"713B3987-99B1-4168-B258-65629B3C7484"}
 */
function onDataChange_pulsocarac(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			elements.presiomax.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B69450CC-BF05-4770-8079-9ECBDB6A77FF"}
 */
function onDataChange_presiomax(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
		
	}
	
		if(newValue!=null&&newValue!=0){
			elements.presiomin.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8063B9F2-7FFA-4B1C-90E5-4463E6F918DE"}
 */
function onDataChange_presiomin(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
	}
	
		if(newValue!=null&&newValue!=0){
			elements.asa.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"628FAF70-6418-4A16-9010-BA70A49E07F8"}
 */
function onDataChange_asa(oldValue, newValue, event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
	}
	//if(oldValue==null){
		if(newValue!=null&&newValue!=0){
			elements.tabless_246.tabIndex=1
			forms.cuadros_1.elements.btn_1.requestFocus()
			return true
		}else{
			return false
		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3939FF6D-854F-4B7B-A227-95288E55C226"}
 */
function onAction_VolveraMenu(event) {
	application.showForm("frm_menu_principal")
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1626070-17C9-4931-A929-540791EB4CE8"}
 */
function onAction_pulsocarac(event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
	}
	vhisclin_to_tbc_anestesia.anes_pulsocarac='NORMAL'
	elements.presiomax.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79F7C32F-07A0-48C8-8248-205132D11D36"}
 */
function onAction_ayuda_evaluacion_anestesica_preoperatoria(event) {
	globals.textoAyuda='AYUDA-4'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Evaluación Anestésica Pre-Operatoria";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_2)
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EA3A0E3-9BF5-4AD4-A0F9-20DF90510B64"}
 */
function onDoubleClick_Interven(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.show(forms.frm_busqueda_interven)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B50E5D0-2A95-460F-B50C-BD827535D331"}
 */
function onAction_tipointerven(event) {
	elements.tipocirugia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"923390C8-2C28-415A-9EC9-37BE32D061C7"}
 */
function onAction_evaluacion(event) {
	if (globals.validoCamposCabecera('frm_anestesia_preoperatoria_dtl')){
		forms.cuadros_1.elements.btn_graba.enabled = true
	}
	elements.horainicio.requestFocus()
}
