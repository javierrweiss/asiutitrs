/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F58819B8-76AE-4ACB-A667-1467033E4A7B"}
 */
var borderError = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B47735B8-4042-4C0C-AFF1-BDE360E5F787"}
 */
var messageError = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B7B19FEC-2116-4CF9-A10D-04279D7E749E",variableType:4}
 */
var f_sector = 0;

/**
 * @properties={typeid:35,uuid:"12FEF2CA-6805-4909-B16A-DB9AEDC90E83",variableType:-4}
 */
var $fs_observa = databaseManager.getFoundSet("desal","hojaenfer_observa");

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E52C1F8-B32E-4ED7-9A7D-94615175C735",variableType:4}
 */
var f_ultimaHora = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6AAB3C3D-E4A1-42F6-8519-3AE3E553A03A",variableType:93}
 */
var f_ultimaFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"37FA133E-2AA9-4B19-94CA-511DBCAC5A8B",variableType:4}
 */
var f_horaIngreso = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"38C96407-0084-4ED0-9947-0B864331BFDB",variableType:93}
 */
var f_altaAdmin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AD97A1E0-ACD3-4460-AB27-7860B5FFF8B5",variableType:93}
 */
var f_Ingreso = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7B87C352-E9D5-4A2D-9BE7-849A9A053693",variableType:93}
 */
var f_fecaltaefec = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD88CCEF-9D49-42E3-B508-07D0C2D9424A",variableType:4}
 */
var f_utiliza = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89AC22DE-A8C2-4F51-985B-E070E589BDD0"}
 */
var f_cama = null;

/**
 * @properties={typeid:35,uuid:"824BDCFF-442A-4681-9C0B-AD76866C68B8",variableType:-4}
 */
var $fs_hojaEnfer = databaseManager.getFoundSet("asistencial","tbc_hojenfer");

/**
 * @properties={typeid:35,uuid:"07EDCCE4-90CB-47BB-913E-4B8D4CD8FAE3",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DE8ACA2C-ECDC-4953-A2AC-D9FE4FB3E5DD",variableType:8}
 */
var f_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05BF0898-3F9E-4461-AD85-1C35FD092691"}
 */
var f_turno = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F756E168-4DD1-450C-B2BC-8412575265A0",variableType:4}
 */
var f_habitacion = null;

/**
 * @properties={typeid:35,uuid:"9CE3D4A4-BF14-429D-A545-4BB103827060",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"23BE12C0-5761-4FEB-B825-48B5D3BE2B13",variableType:93}
 */
var f_fechaCarga = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"055EA743-42A3-4809-B586-0E3524D0CC05"}
 */
var f_messageErrorItem = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1D0080B7-03D0-4B72-B8A6-B94D8FF5952C",variableType:93}
 */
var f_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AC0A8CE0-651A-4C41-8F4E-69F8818C373D",variableType:93}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4C18433-FF0B-4B2F-BC06-2F7188D60BEF"}
 */
var f_edad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E8CC77B-44E7-4817-B16E-1F7F4E296FF1",variableType:8}
 */
var f_histClinica = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8C0325A-B4C3-4FF1-A977-E251110BDE3C"}
 */
var f_paciente = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B7C8279-6910-4AC9-A841-2F60A9B17D7E"}
 */
function onAction_btnNuevo(event) {

	var limpiar = false;
	if($isDirty){
		var respuesta = globals.DIALOGS.showQuestionDialog('¡Atención!','Existen datos que no hay sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No');
		if( respuesta == 'Si')
			limpiar = true;
	}
	else{
		limpiar = true;
	}
		
	if(limpiar){
		inicializarDataForm();
		// control del elemento por perfil	    		
		var $form = controller.getName();
		globals.hojaenfer_controlarElementos($form);
	}
	
}

/**
 * @properties={typeid:24,uuid:"6A669212-EE95-4824-89D8-72334D70927A"}
 */
function clearForm (){
	// Cabecera
	f_id = null;
	f_paciente = null;
	f_histClinica = null;
	f_edad = null;
	f_habitacion = 0;
	f_cama = ' ';
	f_utiliza = 0;
	f_fecha = null;
	f_hora = null;
	f_turno  = null;
	f_fechaCarga = null;
	f_fecaltaefec =  null;
	f_altaAdmin = null;
	f_Ingreso = null;
	f_horaIngreso = 0;
	f_ultimaFecha = null
	f_ultimaHora = 0;
	f_sector = null;
	
	forms.hojaenfer_frm_hoja_enfermeria.controller.recreateUI();
	
	// Marcadores
	var frm = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_1');
	var elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.length;
	var elem;
	var i;
	for (i=0; i<elementsCount; i++)
	{
		elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements[i];
		switch(elem.getElementType()){
			case "TEXT_FIELD":{
				
				if(frm.getVariable(elem.getDataProviderID()).variableType == JSVariable.TEXT)
					forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = ' ';
				else
					forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			case "RADIOS":{
				
				if(elem.getValueListName() == "hojaenfer_No_Si_x")
					forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = ' ';
				else
					forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = 0;
					
				//forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			case "COMBOBOX":{
					//forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = 0;
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			case "CALENDAR":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = null;
			}
			break;
			default :
			break;
		}
	}
	
	frm = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_2');
	elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.length;
	for (i=0; i<elementsCount; i++)
	{
		elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements[i];
		switch(elem.getElementType()){
			case "TEXT_FIELD":{
				
				//forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = 0;
				if(frm.getVariable(elem.getDataProviderID()).variableType == JSVariable.TEXT)
					forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = ' ';
				else
					forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			case "RADIOS":{
				
				if(elem.getValueListName() == "hojaenfer_No_Si_x")
					forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = ' ';
				else
					forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = 0;
			
				//forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			case "COMBOBOX":{
				//forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = 0;
				forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
			}
			break;
			default :
			break;
		}
	}
	
	forms.hojaenfer_tab_hoja_enfermeria_obser.hoexlinea = null;
	clearDataAltaPaciente();
	editableDataAltaPaciente(true);
}

/**
 * @properties={typeid:24,uuid:"E0CC38B3-9D4F-43CA-9476-26F787A9728D"}
 */
function isValidDataForm (){
	
	var isValid = true;	
	messageError = "No ha sido posible guardar la hoja. Corrija los siguientes errores y vuelva a intentar."
	//borderError = 'LineBorder,1,#ff0000';
	setDefaultBorderElements();
	
	isValid = isValidDate();
	
	if(f_cama == null){
		elements.txt_cama.border = borderError;
		messageError += "\nPaciente sin cama.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetemper == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetemper.border = borderError;
		messageError += "\nDebe ingresar temperatura.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoepulso == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoepulso.border = borderError;
		messageError += "\nDebe ingresar pulso.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoerespir == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoerespir.border = borderError;
		messageError += "\nDebe ingresar respiración.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetamax == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetamax.border = borderError;
		messageError += "\nDebe ingresar tensión arterial máxima.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetamin == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetamin.border = borderError;
		messageError += "\nDebe ingresar tensión arterial mínima.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoesaturo == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoesaturo.border = borderError;
		messageError += "\nDebe ingresar saturometria.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoeconcie == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.cbo_hoeconcie.border = borderError;
		messageError += "\nDebe seleccionar conciencia.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoesecrec == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoesecrec.border = borderError;
		messageError += "\nDebe seleccionar secreciones.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoemedcum == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoemedcum.border = borderError;
		messageError += "\nDebe seleccionar medicación cumplida.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoehigcon == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoehigcon.border = borderError;
		messageError += "\nDebe seleccionar higiene y confor.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoecbiode == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoecbiode.border = borderError;
		messageError += "\nDebe ingresar cantidad en Cambio de decubito.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoeopccbiode == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.cbo_hoeopccbiode.border = borderError;
		messageError += "\nDebe seleccionar Cambio de decubito.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoecolviac == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoecolviac.border = borderError;
		messageError += "\nDebe seleccionar Colocacion de Via Cent.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoecolsv == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoecolsv.border = borderError;
		messageError += "\nDebe seleccionar colocación de SV.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepaccsv == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoepaccsv.border = borderError;
		messageError += "\nDebe seleccionar paciente con SV.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepospac == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.cbo_hoepospac.border = borderError;
		messageError += "\nDebe seleccionar posición del paciente.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeaspsec == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.txt_hoeaspsec.border = borderError;
		messageError += "\nDebe ingresar aspiración secreciones.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeviacur == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoeviacur.border = borderError;
		messageError += "\nDebe seleccionar paciente c/Via Ctral.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeviacur == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoecurac.border = borderError;
		messageError += "\nDebe seleccionar curaciones.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepresfl == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoepresfl.border = borderError;
		messageError += "\nDebe seleccionar presencia fliar./cuid.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoebaran == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoebaran.border = borderError;
		messageError += "\nDebe seleccionar uso de barandas.";        
        isValid = false;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoehigbuc == null){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.cbo_hoehigbuc.border = borderError;
		messageError += "\nDebe seleccionar higiene bucal.";        
        isValid = false;
	}

	
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar");
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetemper.requestFocus();
	}
	
	return isValid;
	
}

/**
 * @properties={typeid:24,uuid:"E5332AEE-EA6E-4CC7-B5C1-D1BA39548A68"}
 */
function isValidDate () {
	
	var isValid = true;	

	if(f_fecha == null || f_hora == null){
		
		if(f_fecha == null){
			elements.cld_fecha.border = borderError;
			messageError += "\nDebe ingresar la fecha de La hoja.";        
	        isValid = false;
		}
		
		if(f_hora == null){
			elements.cld_hora.border = borderError;
			messageError += "\nDebe ingresar la hora de La hoja.";        
	        isValid = false;
		}
		
	}
	else{
		
		var fechaActual = utils.timestampToDate( application.getServerTimeStamp());
		var horaActual = utils.stringToNumber(globals.FormatearFecha(application.getServerTimeStamp(),'HHMM'));
		
		var horaAux = utils.stringToNumber(globals.FormatearFecha(f_hora,'HHMM'));
		
		var ultimaFecha = "";
		var ultimaHora = "";
		if(f_ultimaFecha != null){
			var uFecha = globals.FormatearFecha(f_ultimaFecha, 'AAAAMMDD');
			ultimaFecha = String(uFecha).substr(6,2) + '/' + String(uFecha).substr(4,2) + '/' + String(uFecha).substr(0,4);
		}
		
		if(f_ultimaHora > 0){
			var uHora = convertNumberToHour_HHMM(f_ultimaHora);
			ultimaHora = uHora.substr(0,2) + ':' + uHora.substr(2,2);
		}
		
		var fechaIngreso = "";
		var horaIngreso = "";
		if(f_Ingreso != null){
			var fIngreso = globals.FormatearFecha(f_Ingreso, 'AAAAMMDD');
			fechaIngreso = String(fIngreso).substr(6,2) + '/' + String(fIngreso).substr(4,2) + '/' + String(fIngreso).substr(0,4);
		}
		
		if(f_horaIngreso > 0){
			var hIngreso = convertNumberToHour_HHMM(f_horaIngreso);
			horaIngreso = hIngreso.substr(0,2) + ':' + hIngreso.substr(2,2);
		}
		
		if(f_fecha < f_Ingreso){
			elements.cld_fecha.border = borderError;
			messageError += "\nLa hoja no puede ser anterior al ingreso. Fecha: " + fechaIngreso + ' ' + horaIngreso;        
	        isValid = false;
		}
		
		if(f_fecha == f_Ingreso && horaAux < f_horaIngreso){
			elements.cld_hora.border = borderError;
			messageError += "\nLa hoja no puede ser anterior al ingreso. Fecha: " + fechaIngreso + ' ' + horaIngreso;        
	        isValid = false;
		}
		
		if(f_id == null){
			
			if(f_fecha < f_ultimaFecha){
				elements.cld_fecha.border = borderError;
				messageError += "\nLa hoja no puede ser anterior a la ultima. Fecha: " + ultimaFecha + ' ' + ultimaHora;        
		        isValid = false;
			}
			
			if(f_fecha == f_ultimaFecha && horaAux <= f_ultimaHora){
				elements.cld_hora.border = borderError;
				messageError += "\nLa hoja no puede ser anterior a la ultima. Fecha: " + ultimaFecha + ' ' + ultimaHora;        
		        isValid = false;
			}
			
			if(f_fecha > fechaActual){
				elements.cld_fecha.border = borderError;
				messageError += "\nLa fecha de la hoja no puede ser mayor a la fecha actual.";        
		        isValid = false;
			}
			
			if(f_fecha == fechaActual && horaAux > horaActual){
				elements.cld_hora.border = borderError;
				messageError += "\nLa hora de la hoja no puede ser mayor a la hora actual.";        
		        isValid = false;
			}
		}	
	}

	return isValid;
}

/**
 * @properties={typeid:24,uuid:"F8E8BFE1-928E-48EE-8081-37088240FAFA"}
 */
function inicializarDataForm (){
	
	$fs_hojaEnfer.clear();
	$fs_observa.clear();
	clearForm();
	visibleVariablesAuxiliares(false);
	inicilizarDatosObligatorios();
	setDefaultBorderElements();
	setEditableHeader(false);
	setEditableBody(false);
	
	elements.txt_paciente.enabled = true;
	elements.btn_buscarPaciente.enabled = true;
	elements.tabs.tabIndex = 1;
	elements.tabs.visible = false;
	
	elements.txt_paciente.requestFocus();
	$isDirty = false;
	
}

/**
 * @properties={typeid:24,uuid:"A5910893-E148-472B-A740-AD8904114380"}
 */
function inicilizarDatosObligatorios (){
	
	// Cabecera
	
	// Marcadores hoja-1
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetemper = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoepulso = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoerespir = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetamax = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoetamin = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoesaturo = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoeconcie = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoesecrec = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoemedcum = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoeopccbiode = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoecolviac = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoehigcon = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoecbiode = null;
	
	
	// Marcadores hoja-2
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoecolsv = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepaccsv = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepospac = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeaspsec = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeviacur = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoepresfl = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoebaran = null
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoehigbuc = null
}

/**
 * @properties={typeid:24,uuid:"A165869D-2F6E-4DD9-B4F4-985180BAC091"}
 */
function setDefaultBorderElements() {
	
	var border = 'LineBorder,1,null';
	var borderCbo = 'LineBorder,1,#abadb3';
	//elements.lbl_itemRecibido.border = null;
	
	elements.cld_fecha.border = border;
	elements.cld_hora.border = border;
	elements.txt_cama.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetemper.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoepulso.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoerespir.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetamax.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetamin.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoesaturo.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoehigcon.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.cbo_hoeconcie.border = borderCbo;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoesecrec.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoemedcum.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.cbo_hoeopccbiode.border = borderCbo;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.opt_hoecolviac.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoecbiode.border = border;
	
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoecolsv.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoepaccsv.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.cbo_hoepospac.border = borderCbo;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.txt_hoeaspsec.border = border;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoeviacur.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoecurac.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoepresfl.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.opt_hoebaran.border = null;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.cbo_hoehigbuc.border = borderCbo;
	
}

/**
 * @properties={typeid:24,uuid:"F96CA07C-1192-401F-B047-4496C9D7C794"}
 */
function setEditableHeader (editable){
	elements.cld_fecha.enabled = editable;
	elements.cld_hora.enabled = editable;
}

/**
 * @properties={typeid:24,uuid:"F23A00DB-0F75-48E4-9D17-A2AB7DC9A0D1"}
 */
function setEditableBody(editable){
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.controller.readOnly = !editable;
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.controller.readOnly = !editable;
	forms.hojaenfer_tab_hoja_enfermeria_obser.controller.readOnly = !editable;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D79A061A-030C-408A-912E-883D6F7079A4"}
 */
function onAction_txtBusquedaRapida(event) {
	
	globals.hojaenfer_histclin_apeynom = f_paciente;
	if(globals.hojaenfer_histclin_apeynom != '' && globals.hojaenfer_histclin_apeynom != null){
		globals.hojaenfer_eventSourceButton = 0;
		openSearch();
		//$isDirty = true;
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de paciente o apellido.',"Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"C46A4351-49A5-461C-B0E2-8A757F2139DE"}
 */
function openSearch() {
	// Internado
	
	var win2 = application.createWindow("hojaenfer_seleccion_internado",JSWindow.MODAL_DIALOG);	
	win2.title= 'Búsqueda de Pacientes Internados';
	win2.resizable = false;
	win2.show(forms.hojaenfer_dlg_buscar_internado);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1975F018-CEEE-4A81-9C5C-16BDC6A4F72A"}
 */
function onAction_btnBuscarPaciente(event) {
	
	globals.hojaenfer_eventSourceButton = 1;
	openSearch();
}

/**
 * @properties={typeid:24,uuid:"D0B97E51-8944-43BA-A33A-47EE1180F7EC"}
 */
function cargarDatosPacienteSearch (){
	
	var modificarHoja = null;
	//var generarHojaNueva = false;
	var fecha = 0;
	var hora = 0;
	
	if(f_fecaltaefec == null && f_altaAdmin == null){
		
		var sqlFecha = "SELECT max(hoefecha) fecha FROM tbc_hojenfer WHERE HoeHistClinica =" + f_histClinica;
		//var sqlFecha = "SELECT max(hoefecha) fecha FROM tbc_hojenfer WHERE HoeHistClinica =" + f_histClinica + " and hoenumleg = " + globals.vLega + " and hoefechamodi > 0";
		var dsFecha = databaseManager.getDataSetByQuery('asistencial',sqlFecha,null,-1);
		fecha = dsFecha.getValue(1,1);
		
		if(fecha != null){
			
			var sqlhora = "SELECT max(hoehora) FROM tbc_hojenfer WHERE HoeHistClinica =" + f_histClinica + " and hoefecha = " + fecha;
			//var sqlhora = "SELECT max(hoehora) FROM tbc_hojenfer WHERE HoeHistClinica =" + f_histClinica + " and hoenumleg = " + globals.vLega + " and hoefechamodi > 0" +  " and hoefecha = " + fecha;
			var dsHora = databaseManager.getDataSetByQuery('asistencial',sqlhora,null,-1);
			hora = dsHora.getValue(1,1);
			
			var sqlHojaAlta = "SELECT HoeOpcAlta_1,HoeOpcAlta_2,HoeOpcAlta_3,HoeOpcAlta_4,HoeOpcAlta_5,hoenumleg FROM tbc_hojenfer WHERE HoeHistClinica =" + f_histClinica + " and hoefecha = " + fecha + " and hoehora = " + hora;
			var dsHojaAlta = databaseManager.getDataSetByQuery('asistencial',sqlHojaAlta,null,-1);
			
			// Evaluando si la ultima hoja es de alta
			if(dsHojaAlta.getValue(1,1) == 1 || dsHojaAlta.getValue(1,2) == 1 || dsHojaAlta.getValue(1,3) == 1 || dsHojaAlta.getValue(1,4) == 1 || dsHojaAlta.getValue(1,5) == 1){
				modificarHoja = "No";
				//generarHojaNueva = true;
			}
			else{
				//La ultima hoja no es de alta, evaluar si es del operador legado 
				if(dsHojaAlta.getValue(1,6) == globals.gbl_Lega_ac){
					var horaAux = convertNumberToHour_HHMM(hora);
					var ultimaHora = horaAux.substr(0,2) + ':' + horaAux.substr(2,2);
					var ultimaFecha = String(fecha).substr(6,2) + '/' + String(fecha).substr(4,2) + '/' + String(fecha).substr(0,4);
					
					modificarHoja = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Desea Modificar última hoja? Fecha: ' + ultimaFecha + ' ' +  ultimaHora + '. Presione botón [Si]\nHoja nueva. Presione botón [No]', 'Si', 'No');
				}
				else{
					// Si la ultima hoja de enfermeria no es del operador, generar una hoja nueva de enfer.
					modificarHoja = "No";
					//generarHojaNueva = true;
				}
			}
			
			f_ultimaFecha = globals.IntegerToDate(fecha);
			f_ultimaHora = hora;
			
		}
		else{
			modificarHoja = "No";
		}
		
		switch(modificarHoja){
			case 'No': {
				//Genera Hoja nueva
				//if(generarHojaNueva){
					//hojaAltaPaciente = 'No';
				//}
				//else{
					var hojaAltaPaciente = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Es hoja de alta de paciente?', 'Si', 'No');
				//}
				 
				switch(hojaAltaPaciente){
					case 'Si': {
						
						setEditableHeader(true);
						f_fecha = utils.timestampToDate(application.getServerTimeStamp());
						f_hora = application.getServerTimeStamp();
						actualizarDataHeader();
						var ho = getHoraSegunFecha(f_hora);
						f_turno = getTurnoSegunhora(ho);
						
						elements.txt_paciente.enabled = false;
						elements.btn_buscarPaciente.enabled = false;
						elements.tabs.visible = true;
						elements.tabs.removeTabAt(1);
						elements.tabs.removeTabAt(1);
						elements.tabs.removeTabAt(1);
						
						// control del elemento por perfil	    		
						var $form = controller.getName();
						globals.hojaenfer_controlarElementos($form);
						elements.btn_grabar.visible = false;
					
						elements.cld_fecha.requestFocus();
						$isDirty = true;
					}
					break;
					case 'No': {
						
						elements.tabs.removeTabAt(4);
						inicializarFormSegunSearch();
						setEditableHeader(true);
						
						f_fecha = utils.timestampToDate(application.getServerTimeStamp());
						f_hora = application.getServerTimeStamp();
						actualizarDataHeader();
						var hor = getHoraSegunFecha(f_hora);
						f_turno = getTurnoSegunhora(hor);
						
						// control del elemento por perfil	    		
						var $form = controller.getName();
						globals.hojaenfer_controlarElementos($form);
						elements.btn_grabarAltaPaciente.visible = false;
						
						elements.cld_fecha.requestFocus();
						$isDirty = true;
						
					}
					break;
					default : {
						//limpiar form.
						inicializarDataForm();
						elements.txt_paciente.requestFocus();
					}
					break;
				}
			}
			break;
			
			case 'Si': {
				//Modifica ultima hoja
				elements.tabs.removeTabAt(4);
				setEditableHeader(false);
				loadDataform(f_histClinica,fecha,hora);
				inicializarFormSegunSearch();
				
				// control del elemento por perfil	    		
				var $form = controller.getName();
				globals.hojaenfer_controlarElementos($form);
				elements.btn_grabarAltaPaciente.visible = false;
				
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetemper.requestFocus();
				$isDirty = false;
			}
				
			break;
			
			default:
				//limpiar form.
				inicializarDataForm();
				elements.txt_paciente.requestFocus();
			break;
		}
			
	}
	else{
		if(f_fecaltaefec != null)
			globals.DIALOGS.showInfoDialog("¡Atencón!","El paciente egresó del sanatorio.","Aceptar");
		else
			globals.DIALOGS.showInfoDialog("¡Atencón!","El paciente tiene Alta Administrativa.","Aceptar");
		inicializarDataForm();
	}
		
}

/**
 * @properties={typeid:24,uuid:"741133B6-54BE-4565-936B-FF96AAEA84C8"}
 */
function inicializarFormSegunSearch () {
	
	elements.txt_paciente.enabled = false;
	elements.btn_buscarPaciente.enabled = false;
	elements.tabs.visible = true;
	setEditableBody(true);
	
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoecolviapEditable();
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoediuresxEditable();
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoehgtEditable();
	forms.hojaenfer_tab_hoja_enfermeria_marcador_1.hoeinsuliEditable();
	//forms.hojaenfer_tab_hoja_enfermeria_marcador_1.onAction_optHoeopcdiuresvo3(null);
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoecuracEditable();
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeesccurEditable();
	forms.hojaenfer_tab_hoja_enfermeria_marcador_2.hoeviacurEditable();
}

/**
 * @properties={typeid:24,uuid:"CA8C3F63-86FA-4FC2-BF10-EC182503F0DD"}
 * @AllowToRunInFind
 */
function actualizarDataHeader (){
	
	var isValid = true;
	messageError= "";
	//borderError = 'LineBorder,1,#ff0000';
	var border = 'LineBorder,1,null';
	elements.cld_fecha.border = border;
	elements.cld_hora.border = border;
	isValid = isValidDate();
	
	if(isValid){
		
		var index = 0;
		var fechaAux = utils.stringToNumber(globals.FormatearFecha(f_fecha, 'AAAAMMDD'));
		var horaAux = utils.stringToNumber(globals.FormatearFecha(f_hora,'HHMM'));
		
		var sql = "select * from tbc_detalle where Det1 = " + f_histClinica + " and Det2 <= " + fechaAux + " order by Det2 desc, det3 desc";
		var ds = databaseManager.getDataSetByQuery("asistencial", sql, null, -1);
		var maxRows = ds.getMaxRowIndex();
		
		if(maxRows > 0){
			//En el indice 1 se encuentra el ultimo detalle, los datos estan ordenados de forma descendente.
			
			if(fechaAux > ds.getValue(1,2)){
				//application.output(ds.getValue(1,2) + ' ' + ds.getValue(1,3) + ' ' + ds.getValue(1,7));
				index = 1;
			}
			else{
				if(fechaAux == ds.getValue(1,2) && horaAux >= ds.getValue(1,3)){
					//application.output(ds.getValue(1,2) + ' ' + ds.getValue(1,3) + ' ' + ds.getValue(1,7));
					index = 1;
				}
				else{
					
					var i;
					for(i=2;i <= maxRows;i++){
		
						if(fechaAux == ds.getValue(i,2) && horaAux >= ds.getValue(i,3) && horaAux < ds.getValue(i,10)){
							//application.output(ds.getValue(i,2) + ' ' + ds.getValue(i,3) + ' ' + ds.getValue(i,7));
							index = i;
							break;
						}
						
						if(ds.getValue(i,2) < fechaAux){
							//application.output(ds.getValue(i,2) + ' ' + ds.getValue(i,3) + ' ' + ds.getValue(i,7));
							index = i;
							break;
						}
						
					}
				}
			}
		}
		
		if(index > 0){
			f_habitacion = ds.getValue(index,4);
			f_cama = ds.getValue(index,7);
			f_utiliza = ds.getValue(index,8);
			
			var $fs_habita = databaseManager.getFoundSet("maestros","tbc_habita");
			$fs_habita.find();
			$fs_habita['hab_nrohabi'] = f_habitacion;
			$fs_habita.search();
			
			f_sector = $fs_habita['hab_sector'];
		}
		else{
			f_habitacion = null;
			f_cama = null;
			f_utiliza = null;
			f_sector = null;
			
			globals.DIALOGS.showInfoDialog("!Atención¡",'Paciente sin cama.',"Aceptar");
		}
	}
	else{
		f_habitacion = null;
		f_cama = null;
		f_utiliza = null;
		f_sector = null;
		globals.DIALOGS.showInfoDialog("!Atención¡",messageError,"Aceptar");
	}		
	
	return isValid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85A101B8-C12A-445C-90FC-87ED67CF000F"}
 */
function onAction_btnGuardar(event) {

	if($isDirty){
		
		var res = null;
		if(f_id == null || f_id == 'null')
			res = globals.DIALOGS.showQuestionDialog('¡Atención!','Esta seguro que desea guardar la hoja de enfermeria', 'Si', 'No')
		else
			res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Esta seguro que desea guardar las modificaciones aplicadas a la hoja de enfermeria?', 'Si', 'No')
		
		if(res == 'Si'){
		
		if(isValidDataForm()){
			
			if(f_id == null || f_id == 'null'){
				
				$fs_hojaEnfer.clear();
				$fs_hojaEnfer.newRecord()
				
				// compleando datos de cabecera
				$fs_hojaEnfer['hoehistclinica'] = f_histClinica; 
				$fs_hojaEnfer['hoefecha'] = globals.FormatearFecha(f_fecha, 'AAAAMMDD');
				$fs_hojaEnfer['hoehora'] = globals.FormatearFecha(f_hora,'HHMM');
				
				$fs_hojaEnfer['hoetipleg'] = globals.gbl_tipo_Legajo_ac;
				$fs_hojaEnfer['hoenumleg'] = globals.gbl_Lega_ac;
				
				$fs_hojaEnfer['hoefechacarga'] = globals.FormatearFecha(utils.timestampToDate( application.getServerTimeStamp()),'AAAAMMDD');
				$fs_hojaEnfer['hoehoracarga'] = globals.FormatearFecha(application.getServerTimeStamp(),'HHMM');
				
				$fs_hojaEnfer['hoefechamodi'] = 0; 
				$fs_hojaEnfer['hoehoramodi'] = 0;
				
				$fs_hojaEnfer['hoehabi'] = f_habitacion;
				$fs_hojaEnfer['hoecama'] = f_cama;
				$fs_hojaEnfer['hoeutiliza'] = f_utiliza;
				$fs_hojaEnfer['hoesector'] = f_sector;
				
				$fs_hojaEnfer['hoeopcalta_1'] = 0;
				$fs_hojaEnfer['hoeopcalta_2'] = 0;
				$fs_hojaEnfer['hoeopcalta_3'] = 0;
				$fs_hojaEnfer['hoeopcalta_4'] = 0;
				$fs_hojaEnfer['hoeopcalta_5'] = 0;
				
			}
			else{
				
				$fs_hojaEnfer['hoefechamodi'] = globals.FormatearFecha(utils.timestampToDate( application.getServerTimeStamp()),'AAAAMMDD'); 
				$fs_hojaEnfer['hoehoramodi'] = globals.FormatearFecha(application.getServerTimeStamp(),'HHMM');
			}
			
			// Campos modificables
			
			// Marcadores hoja-1
			var frmMarcador1 = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_1');
			var elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.length;
			var elem;
			var i = 0;
			for (i = 0; i<elementsCount; i++)
			{
				elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements[i];
				switch(elem.getElementType()){
					case "TEXT_FIELD":{
					
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
						if(frmMarcador1.getVariable(elem.getDataProviderID()).variableType == JSVariable.TEXT){
							
							if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()].toString().length > 0)
								$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()];
							else
								$fs_hojaEnfer[elem.getDataProviderID()] = ' ';
						}
						else{
							
							if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] != null)
								$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()];
							else
								$fs_hojaEnfer[elem.getDataProviderID()] = 0;
						}
						
					}
					break;
					case "RADIOS":{
						$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()];
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
					}
					break;
					case "COMBOBOX":{
						$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()];
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
					}
					break;
					case "CALENDAR":{
						if(forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] != null){
							$fs_hojaEnfer[elem.getDataProviderID()] = utils.stringToNumber(globals.FormatearFecha(forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()],'HHMM'));
							//application.output(elem.getName() + ": " + utils.stringToNumber(globals.FormatearFecha(forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()],'HHMM')));
						}
						else
							$fs_hojaEnfer[elem.getDataProviderID()] = 0;
					}
					break;
					default :
					break;
				}
			}
			
			//Marcadores hoja-2
			var frmMarcador2 = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_2');
			elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.length;
			
			for (i = 0; i<elementsCount; i++)
			{
				elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements[i];
				switch(elem.getElementType()){
					case "TEXT_FIELD":{
						
						if(frmMarcador2.getVariable(elem.getDataProviderID()).variableType == JSVariable.INTEGER){
							
							if(forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] != null)
								$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()];
							else
								$fs_hojaEnfer[elem.getDataProviderID()] = 0;
						}
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()]);
					}
					break;
					case "RADIOS":{
						$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()];
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()]);
					}
					break;
					case "COMBOBOX":{
						$fs_hojaEnfer[elem.getDataProviderID()] = forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()];
						//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()]);
					}
					break;
					default :
					break;
				}
			}
			
			//Completando observaciones
			if(utils.stringTrim(forms.hojaenfer_tab_hoja_enfermeria_obser.hoexlinea).length > 0){
				$fs_hojaEnfer['hoeobserva'] = 'X';//si tiene observacion X
			}
			else
				$fs_hojaEnfer['hoeobserva'] = ' ';//si no tiene observacion ' '
				
			if($fs_observa.getSize() == 0){
				$fs_observa.clear();
				$fs_observa.newRecord();
				$fs_observa['histclinica'] = f_histClinica; 
				$fs_observa['fecha'] = globals.FormatearFecha(f_fecha, 'AAAAMMDD');
				$fs_observa['hora'] = globals.FormatearFecha(f_hora,'HHMM');
				$fs_observa['grupo'] = 1;// Tipo observacion
			}
			
			$fs_observa['linea'] = utils.stringTrim(forms.hojaenfer_tab_hoja_enfermeria_obser.hoexlinea);
			
				
			//Actualizando base de datos
			databaseManager.startTransaction()
			var result = databaseManager.saveData($fs_hojaEnfer.getRecord(1));
			var result2 = databaseManager.saveData($fs_observa.getRecord(1));
			if(result == true && result2 == true){
				databaseManager.commitTransaction();
				
				// Si es una insercion se actualiza el id
				if(f_id == null || f_id == 'null'){
					f_id = f_histClinica;
				}
					
				globals.DIALOGS.showInfoDialog("Resultado","La hoja de enfermeria se guardo correctamente.","Aceptar");
				setEditableHeader(false);
				
				var print = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Desea imprimir la hoja de enfermeria?', 'Si', 'No');
				if( print == 'Si'){
					imprimir($fs_hojaEnfer['hoehistclinica'],$fs_hojaEnfer['hoefecha'],$fs_hojaEnfer['hoehora']);
				}
				
				$isDirty = false;
			}
			else{
				var error1 = ''
				var error2 = ''
				var array = databaseManager.getFailedRecords()
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
				
				databaseManager.rollbackTransaction()
				if(error1!=''){
					globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
				}
				globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
			}
		}
		}
	}
	else{
		if(f_id == null)
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para guardar.","Aceptar")
		else
			globals.DIALOGS.showWarningDialog("Atención!","No hay modificaciones para guardar.","Aceptar")
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E057FC64-C130-47AF-B04A-D5C103D82AC7"}
 */
function onShow_inicializarForm(firstShow, event) {
	borderError = 'LineBorder,1,#ff0000';
	inicializarDataForm();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.hojaenfer_controlarElementos($form);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"3933215E-0DE9-427B-9B56-64F447B67CBF"}
 */
function visibleVariablesAuxiliares(value){
	elements.lbl_histClinica.visible = value;
	elements.txt_histclinica.visible = value;
	elements.lbl_id.visible = value;
	elements.txt_id.visible = value;
	elements.lbl_fechaAltaEfectiva.visible = value;
	elements.cld_fecaltaefec.visible = value;
	elements.lbl_fechaAltaAdmin.visible = value;
	elements.cld_altaAdmin.visible = value;
	elements.lbl_sector.visible = value;
	elements.txt_sector.visible = value;
	elements.lbl_fechaIngreso.visible = value;
	elements.cld_ingreso.visible = value;
	elements.lbl_horaIngreso.visible = value;
	elements.txt_horaIngreso.visible = value;
	elements.lbl_ultimaFecha.visible = value;
	elements.cld_ultimaFecha.visible = value;
	elements.lbl_ultimaHora.visible = value;
	elements.txt_ultimaHora.visible = value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"189806F1-283B-49F9-B96E-F88B8929D559"}
 */
function onAction_cldFecha(event) {
	//onDataChange_cldFecha(null,null,event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DC10851F-4CDA-4498-AB58-F439510C9836"}
 */
function onAction_cldHora(event) {
	//onDataChange_cldHora(null,null,event);
}

/**
 * @properties={typeid:24,uuid:"BC6A8118-5166-4EEB-8B38-3E4A39DF11F5"}
 */
function actualizarTurno (){
	if(f_hora != null){
		var hora = getHoraSegunFecha(f_hora);
		f_turno = getTurnoSegunhora(hora);
	}
	else
		f_turno = null;
	
}

/**
 * @properties={typeid:24,uuid:"BA48C465-09B1-42BB-9F12-3495AF5A4791"}
 */
function getTurnoSegunhora (hora){
	var turno = null;
	if(hora > 2159 && hora <=2359 )
		turno = "Noche";
	
	if(hora >= 0  && hora < 600)
		turno = "Noche";
	
	if(hora > 559 && hora < 1400)
		turno = "Mañana";
	
	if(hora > 1359 && hora < 2200)
		turno = "Tarde";
	
	return turno;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param fecha
 *
 * @properties={typeid:24,uuid:"211DBF59-BE2D-4E83-B8B6-FA6BBA253726"}
 */
function getHoraSegunFecha(fecha) {
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	if(min < 10)
		hora += '0' + min;
	else
		hora += '' + min;
	
	return hora
}

/**
 * @properties={typeid:24,uuid:"C0DEFBE5-D171-431F-BC1E-4FD2DD07AE5F"}
 * @AllowToRunInFind
 */
function loadDataform (histClinica,fecha,hora) {
	
	// buscando ultima hoja
	$fs_hojaEnfer.find();
	$fs_hojaEnfer['hoehistclinica'] = histClinica;
	$fs_hojaEnfer['hoenumleg'] = globals.gbl_Lega_ac;
	$fs_hojaEnfer['hoefecha'] = fecha;
	$fs_hojaEnfer['hoehora'] = hora;
	//$fs_hojaEnfer['hoefechamodi'] = '= 0';
	$fs_hojaEnfer.search();
	
	// buscando observacion
	$fs_observa.find();
	$fs_observa['histclinica'] = histClinica;
	$fs_observa['fecha'] = fecha;
	$fs_observa['hora'] = hora;
	$fs_observa['grupo'] = 1;
	$fs_observa.search();
	
	// Actualizando observacion
	forms.hojaenfer_tab_hoja_enfermeria_obser.hoexlinea = $fs_observa['linea']; 
	
	// Actualizando ultima hoja
	f_id = $fs_hojaEnfer['hoehistclinica'];
	f_histClinica = $fs_hojaEnfer['hoehistclinica'];
	f_habitacion = $fs_hojaEnfer['hoehabi'];
	f_cama = $fs_hojaEnfer['hoecama'];
	f_utiliza = $fs_hojaEnfer['hoeutiliza'];
	
	f_fecha = globals.IntegerToDate($fs_hojaEnfer['hoefecha']);
	
	var horaAux = convertNumberToHour_HHMM($fs_hojaEnfer['hoehora']);
	var horaFecha = new Date;
	horaFecha.setHours(utils.stringToNumber(horaAux.substr(0, 2)),utils.stringToNumber(horaAux.substr(2, 2)),0,0);
	f_hora = horaFecha;
	actualizarTurno();
	
	f_fechaCarga = globals.IntegerToDate($fs_hojaEnfer['hoefechacarga']);
	
	// Marcadores
	var elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.length;
	var elem;
	var i;
	for (i=0; i<elementsCount; i++)
	{
		elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements[i];
		switch(elem.getElementType()){
			case "TEXT_FIELD":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
			}
			break;
			case "RADIOS":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
			}
			break;
			case "COMBOBOX":{
					forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
				//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
			}
			break;
			case "CALENDAR":{
				var horaAuxi = convertNumberToHour_HHMM($fs_hojaEnfer[elem.getDataProviderID()]);
				var horaFechaAuxi = new Date;
				horaFechaAuxi.setHours(utils.stringToNumber(horaAuxi.substr(0, 2)),utils.stringToNumber(horaAuxi.substr(2, 2)),0,0);
				forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()] = horaFechaAuxi;
			}
			break;
			default :
			break;
		}
	}
	
	elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.length;
	for (i=0; i<elementsCount; i++)
	{
		elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements[i];
		switch(elem.getElementType()){
			case "TEXT_FIELD":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
			}
			break;
			case "RADIOS":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
				//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
			}
			break;
			case "COMBOBOX":{
				forms.hojaenfer_tab_hoja_enfermeria_marcador_2[elem.getDataProviderID()] = $fs_hojaEnfer[elem.getDataProviderID()];
				//application.output(elem.getName() + ": " + forms.hojaenfer_tab_hoja_enfermeria_marcador_1[elem.getDataProviderID()]);
			}
			break;
			default :
			break;
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1A891036-4C77-4644-BD35-1995062DCA5E"}
 */
function onAction_btnCerrar(event) {
	
	if($isDirty){
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','Existen datos que no hay sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No') == 'Si')
			f_cerrarForm = true;
	}
	else{
		f_cerrarForm = true;
	}
	
	if(f_cerrarForm){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1E4D4AD5-58CD-47CF-B1E9-B048B7EBE6D5"}
 */
function onHide_hojaenfer(event) {
	
	return f_cerrarForm;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param hour
 *
 * @properties={typeid:24,uuid:"6F8B3F25-6B2B-45E2-A0A0-86530E9BFD58"}
 */
function convertNumberToHour_HHMM(hour) {
	
	var hora = '';
	
	switch(hour.toString().length){
		
		case 1: 
			hora = '000'+ hour.toString();
			break;
		case 2:
			hora = '00'+ hour.toString();
			break;
		case 3:
			hora = '0'+ hour.toString().substr(0,1) + hour.toString().substr(1,2);
			break;
		case 4:
			hora = hour.toString().substr(0,2) + hour.toString().substr(2,2);
			break;
		default:
			hora = '';
			break;
	}

	return hora;
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EDB358B0-E8A2-46DC-BE41-72D27CB9F78C"}
 */
function onDataChange_cldHora(oldValue, newValue, event) {
	
	actualizarTurno();
	if(actualizarDataHeader()){
		forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.txt_hoetemper.requestFocus();
	}
	else{
		elements.cld_hora.requestFocus();
	}
	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36DD278D-4B36-4289-8147-D6BC1CAC2A67"}
 */
function onAction_btnGuardarAltaPaciente(event) {
	
	if($isDirty){
		
		var res = null;
		if(f_id == null || f_id == 'null')
			res = globals.DIALOGS.showQuestionDialog('¡Atención!','Esta seguro que desea guardar la hoja de alta.', 'Si', 'No')
		else
			res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Esta seguro que desea guardar las modificaciones aplicadas a la hoja de alta?', 'Si', 'No')
		
		if(res == 'Si'){
		
		if(isValidAltaPaciente()){
			
			if(f_id == null || f_id == 'null'){
				
				$fs_hojaEnfer.clear();
				$fs_hojaEnfer.newRecord()
				
				// compleando datos de cabecera
				$fs_hojaEnfer['hoehistclinica'] = f_histClinica; 
				$fs_hojaEnfer['hoefecha'] = globals.FormatearFecha(f_fecha, 'AAAAMMDD');
				$fs_hojaEnfer['hoehora'] = globals.FormatearFecha(f_hora,'HHMM');
				
				$fs_hojaEnfer['hoetipleg'] = globals.gbl_tipo_Legajo_ac;
				$fs_hojaEnfer['hoenumleg'] = globals.gbl_Lega_ac;
				
				$fs_hojaEnfer['hoefechacarga'] = globals.FormatearFecha(utils.timestampToDate( application.getServerTimeStamp()),'AAAAMMDD');
				$fs_hojaEnfer['hoehoracarga'] = globals.FormatearFecha(application.getServerTimeStamp(),'HHMM');
				
				$fs_hojaEnfer['hoefechamodi'] = 0; 
				$fs_hojaEnfer['hoehoramodi'] = 0;
				
				$fs_hojaEnfer['hoehabi'] = f_habitacion;
				$fs_hojaEnfer['hoecama'] = f_cama;
				$fs_hojaEnfer['hoeutiliza'] = f_utiliza;
				$fs_hojaEnfer['hoesector'] = f_sector;
				
				$fs_hojaEnfer['hoeopcalta_1'] = forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_1;
				$fs_hojaEnfer['hoeopcalta_2'] = forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_2;
				$fs_hojaEnfer['hoeopcalta_3'] = forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_3;
				$fs_hojaEnfer['hoeopcalta_4'] = forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_4;
				$fs_hojaEnfer['hoeopcalta_5'] = forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_5;
				
			}
			
			// Marcadores hoja-1
			var frm = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_1');
			var elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements.length;
			var elem;
			var i;
			for (i=0; i<elementsCount; i++)
			{
				elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_1.elements[i];
				switch(elem.getElementType()){
					case "TEXT_FIELD":{
						
						if(frm.getVariable(elem.getDataProviderID()).variableType == JSVariable.TEXT)
							$fs_hojaEnfer[elem.getDataProviderID()] = ' ';
						else
							$fs_hojaEnfer[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
					}
					break;
					case "RADIOS":{
						
						if(elem.getValueListName() == "hojaenfer_No_Si_x")
							$fs_hojaEnfer[elem.getDataProviderID()] = ' ';
						else
							$fs_hojaEnfer[elem.getDataProviderID()] = 0;
							
					}
					break;
					case "COMBOBOX":{
						$fs_hojaEnfer[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
					}
					break;
					case "CALENDAR":{
						$fs_hojaEnfer[elem.getDataProviderID()] = 0;
					}
					break;
					default :
					break;
				}
			}
			
			frm = solutionModel.getForm('hojaenfer_tab_hoja_enfermeria_marcador_2');
			elementsCount = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements.length;
			for (i=0; i<elementsCount; i++)
			{
				elem = forms.hojaenfer_tab_hoja_enfermeria_marcador_2.elements[i];
				switch(elem.getElementType()){
					case "TEXT_FIELD":{
			
						if(frm.getVariable(elem.getDataProviderID()).variableType == JSVariable.TEXT)
							$fs_hojaEnfer[elem.getDataProviderID()] = ' ';
						else
							$fs_hojaEnfer[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
					}
					break;
					case "RADIOS":{
						
						if(elem.getValueListName() == "hojaenfer_No_Si_x")
							$fs_hojaEnfer[elem.getDataProviderID()] = ' ';
						else
							$fs_hojaEnfer[elem.getDataProviderID()] = 0;
					
						//$fs_hojaEnfer[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
					}
					break;
					case "COMBOBOX":{
						//$fs_hojaEnfer[elem.getDataProviderID()] = 0;
						$fs_hojaEnfer[elem.getDataProviderID()] = frm.getVariable(elem.getDataProviderID()).defaultValue;
					}
					break;
					default :
					break;
				}
			}
			
			//Completando observaciones
			$fs_hojaEnfer['hoeobserva'] = ' ';//si no tiene observacion ' '
				
			//Actualizando base de datos
			databaseManager.startTransaction()
			var result = databaseManager.saveData($fs_hojaEnfer.getRecord(1));
			if(result){
				databaseManager.commitTransaction();
				
				// Si es una insercion se actualiza el id
				if(f_id == null || f_id == 'null'){
					f_id = f_histClinica;
				}
					
				globals.DIALOGS.showInfoDialog("Resultado","La hoja de alta se guardo correctamente.","Aceptar");
				setEditableHeader(false);
				editableDataAltaPaciente(false);
				$isDirty = false;
			}
			else{
				var error1 = ''
				var error2 = ''
				var array = databaseManager.getFailedRecords()
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
				
				databaseManager.rollbackTransaction()
				if(error1!=''){
					globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
				}
				globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
			}
		}
		}
	}
	else{
		if(f_id == null)
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para guardar.","Aceptar")
		else
			globals.DIALOGS.showWarningDialog("Atención!","No hay modificaciones para guardar.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"1411A5AF-6B73-4D2B-8FC4-3046F75588B9"}
 */
function isValidAltaPaciente () {
	
	var isValid = true;
	var selectItem = false;
	messageError = "No ha sido posible guardar la hoja. Corrija los siguientes errores y vuelva a intentar."
	//borderError = 'LineBorder,1,#ff0000';
	setDefaultBorderElements();
	
	isValid = isValidDate();
	
	if(forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_1 == 1){        
        selectItem = true;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_2 == 1){        
        selectItem = true;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_3 == 1){        
        selectItem = true;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_4 == 1){        
        selectItem = true;
	}
	
	if(forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_5 == 1){        
        selectItem = true;
	}
	
	if(!selectItem){
		messageError += "\nDebe seleccionar al menos una opción de alta.";
        isValid = false;
	}
		
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar");
		elements.cld_fecha.requestFocus();
	}
	
	return isValid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"402F77FF-355D-4F84-BC8F-C4C9C95E2C61"}
 */
function esAltaPaciente(value) {
	
	elements.btn_grabarAltaPaciente.visible = value;
	elements.btn_grabarAltaPaciente.enabled = value;
	elements.btn_grabar.visible = !value;
	elements.btn_grabar.enabled = !value;
}

/**
 * @properties={typeid:24,uuid:"8DB4E7C6-32C4-414A-B703-BD25AA9836B7"}
 */
function clearDataAltaPaciente () {
	
	forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_1 = 0;
	forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_2 = 0;
	forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_3 = 0;
	forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_4 = 0;
	forms.hojaenfer_tab_hoja_enfermeria_alta.hoeopcalta_5 = 0;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"082E3BD6-120E-431A-8596-CC03ED420A88"}
 */
function editableDataAltaPaciente(value){
	forms.hojaenfer_tab_hoja_enfermeria_alta.controller.readOnly = !value;
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BABD7002-C013-4B84-8014-A6C6D13344D3"}
 */
function onDataChange_cldFecha(oldValue, newValue, event) {
	
	if(actualizarDataHeader()){
		actualizarTurno();
		elements.cld_hora.requestFocus();
	}
	else{
		elements.cld_fecha.requestFocus();
	}
	
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param histClin
 * @param fecha
 * @param hora
 *
 * @properties={typeid:24,uuid:"41519F31-5D15-4549-B797-66EC86DAA9B7"}
 */
function imprimir(histClin,fecha,hora) {
	
	forms.Hojaenfer_print.imprimirHojaEnfer(histClin,fecha,hora)
	forms.Hojaenfer_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.Hojaenfer_print.controller.print(false,false);
	/*
	var win = application.createWindow("impri_paciente",JSWindow.MODAL_DIALOG);
	win.title = "Impresion de Hoja de Enfermeria";
	win.resizable = false;
	win.show(forms.Hojaenfer_print)
	*/
}
