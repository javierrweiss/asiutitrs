/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1E6C7726-0190-4BA4-8865-7033C1C64A3A",variableType:4}
 */
var $legajo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45FCAE23-1FEC-4404-A264-DDB1E881DDFD"}
 */
var $matricula = null;

/**
 * @properties={typeid:35,uuid:"C463D8B6-3451-4EAE-8FF5-9E436A75695C",variableType:-4}
 */
var $isValid = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39232E45-E2F7-47E9-AF22-6B904ED6C93A",variableType:4}
 */
var f_cantDigitos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"363AA1FB-2C3B-4C3F-B537-A1D297D13359"}
 */
var f_nroDoc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC046111-E5D7-44FE-B82B-73CA07BFF319",variableType:4}
 */
var f_tipoMedico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"48A87A23-93AD-45CC-B865-7690D2BCF541"}
 */
var f_digitoValidador = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6030D14-4EE4-4ADA-B05E-309FE295E340"}
 */
var f_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"094A695A-E8DA-4C00-805B-11BA86B8A022",variableType:4}
 */
var f_legajo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BC9C4FDA-D683-4095-8A87-411E1E48766F"}
 */
function onAction_btnAgregar(event) {
	
	if($isValid){
		
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = f_tipoMedico;
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = $legajo;
		forms.Anatpa_frm_anatpaca.$matriculaMedico = $matricula;
		forms.Anatpa_frm_anatpaca.$nombreMedico = f_nombre;
		
		var $name = application.getActiveWindow().getName()
		var $win = application.getWindow($name)
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible confirmar los datos del médico.","Aceptar")
	}		
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA3A0139-7101-40A8-9FDA-A8917085EAB7"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	onAction_limpiarForm(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E97C584-03AB-4A43-8F2E-A665AA54045D"}
 * @AllowToRunInFind
 */
function onAction_buscarLegajo(event) {
	
	setBorderLineLegajo(false);
	var fechaBaja = 0;
	var tipoLiquidacion = 0;
	var messageErrorDigito = null;
	
	if(f_legajo != null && f_legajo > 0){
		
			var legajo = Number(f_legajo.toString().substr(0,f_legajo.toString().length - 1));
			$legajo = legajo;
			var digitoVerificador = Number(f_legajo.toString().substr(f_legajo.toString().length - 1,1));
			
			globals.vLega = legajo;
			globals.vlargo = globals.vLega.toString().length;
			globals.digito_verificador = digitoVerificador;
			globals.vDigVerif=true;
			
			if(digitoVerificador == 0){
				
				var fs_Medicos = databaseManager.getFoundSet('maestros','tbc_medicos');
				fs_Medicos.find();
				fs_Medicos['med_codigo'] = legajo;
				fs_Medicos.search();
				
				if(fs_Medicos.getSize() > 0){
					f_cantDigitos = 3;
					f_nombre = utils.stringTrim(fs_Medicos['med_apenom']);
					f_nroDoc = utils.stringTrim( fs_Medicos['med_numdoc']);// char
					elements.lbl_nroDocumento.text = getTipoDoc(fs_Medicos['med_tipdoc']);
					elements.lbl_message.text = 'Ingrese los 3 ultimos digitos del documento.';
					$matricula = utils.stringTrim(fs_Medicos['med_matricula']);
					
					f_tipoMedico = 1;
					
				}
				else{
					digitoVerificador = 1;	
				}
			}
			else{
				digitoVerificador = 1;
			}
			
			if(digitoVerificador == 1){
			
				globals.calculaDigitoVerificador()
				
				if(globals.vDigVerif){
					
					var fs_personal = databaseManager.getFoundSet('maestros','tbc_personal');
					fs_personal.find();
					fs_personal['per_legajo'] = legajo;
					fs_personal.search();
					
					if(fs_personal.getSize() > 0){
						
						f_cantDigitos = 4;
						f_nombre = utils.stringTrim(fs_personal['per_apelnom']);
						f_nroDoc = fs_personal['per_nrodoc'];//decimal
						fechaBaja = fs_personal['per_fecbaja'];
						tipoLiquidacion = fs_personal['per_tipliquid'];
						elements.lbl_nroDocumento.text = getTipoDoc(fs_personal['per_tipdoc']);
						elements.lbl_message.text = 'Ingrese los 4 ultimos digitos del documento.';
						$matricula = fs_personal['per_codmatri'];
						
						f_tipoMedico = 0;
					}
				}
				else{
					messageErrorDigito = 'Dígito incorrecto.';
				}
			}
			
			if(utils.stringTrim(f_nombre).length > 0){
				
				var isValid = true;
				
				// Es personal
				if(f_tipoMedico == 0){
					
					if(tipoLiquidacion != 2){
						
						onAction_limpiarForm(null);
						isValid = false;
					}
					else{
						if(fechaBaja > 0){
							
							globals.DIALOGS.showWarningDialog("Atención!","Egresado.","Aceptar");
							isValid = false;
						}
					}
				}
				
				if(isValid){
					
					elements.txt_legajo.readOnly = true;
					
					elements.lbl_nroDocumento.visible = true;
					elements.lbl_message.visible = true;
					elements.txt_digitoValidador.visible = true;
					
					elements.txt_digitoValidador.requestFocus();
					setBorderLineLegajo(true);
				}
				
			}
			else{
				if(messageErrorDigito == null){
					globals.DIALOGS.showWarningDialog("Atención!","Legajo inexistente.","Aceptar")
				}
				else{
					globals.DIALOGS.showWarningDialog("Atención!",messageErrorDigito,"Aceptar")
				}
			}
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","Debe ingresar legajo mayor a 0.","Aceptar")
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param tipo
 *
 * @properties={typeid:24,uuid:"A47FC8B1-A36D-4AD8-819A-A45CC5FF252D"}
 */
function getTipoDoc (tipo) {
	var value = "";
	
	switch(tipo){
			
		case 1:{
			value = 'C.I.';
		}
		break;
		case 2:{
			value = 'L.E.';
		}
		break;
		case 3:{
			value = 'L.C.';
		}
		break;
		case 4:{
			value = 'D.N.I.';
		}
		break;
		case 5:{
			value = 'Pasap.';
		}
		break;
		default:
		break;
	}
	
	return value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10221C45-3823-4AA5-A372-B039F3985862"}
 */
function onAction_verificarDoc(event) {
	$isValid = false;
	setBorderLineDoc(false);
	
	if(utils.stringTrim(f_nombre).length > 0){
		
		if(!isNaN(f_digitoValidador)){
			
			var digito = f_nroDoc.substr(f_nroDoc.length - f_cantDigitos,f_cantDigitos);
			if(digito.equals(f_digitoValidador)){
				$isValid = true;
				elements.txt_digitoValidador.readOnly = true;
				elements.btn_confirmar.requestFocus();
				setBorderLineDoc(true);
			}
			else{
				globals.DIALOGS.showWarningDialog("Atención!","Numero de documento incorrecto.","Aceptar")
			}
			
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención!","Debe ingresar valores numéricos.","Aceptar")
		}
			
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","Debe ingresar documento.","Aceptar")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"911C771A-3C63-4E0F-86C5-8153CA0DBD97"}
 */
function onAction_limpiarForm(event) {
	
	f_legajo = null;
	$legajo = null;
	f_nombre = null;
	f_digitoValidador = null;
	$matricula = null;
	
	f_cantDigitos = null;
	f_nroDoc = null;
	f_tipoMedico = null;
	$isValid = false;
	
	elements.txt_legajo.readOnly = false;
	elements.txt_digitoValidador.readOnly = false;
	
	elements.lbl_nroDocumento.visible = false;
	elements.lbl_message.visible = false;
	elements.lbl_nroDocumento.text = "";
	elements.lbl_message.text = "";
	elements.txt_digitoValidador.visible = false;
	
	setBorderLineDefault();
	elements.txt_legajo.requestFocus();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"A480F8AD-6C1C-49E5-8663-B9958FB59E77"}
 */
function setBorderLineLegajo (value){
	
	if(value){
		elements.txt_legajo.border = 'LineBorder,2,#008040'; 
		elements.txt_nombre.border = 'LineBorder,2,#008040';
	}
	else{
		elements.txt_legajo.border = 'LineBorder,1,#ff0000'; 
		//elements.txt_nombre.border = 'LineBorder,1,#ff0000';
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"A162BB88-74B7-4645-BA4D-C6F2C0EB1E11"}
 */
function setBorderLineDoc (value){
	
	if(value){
		elements.txt_digitoValidador.border = 'LineBorder,2,#008040'; 
	}
	else{
		elements.txt_digitoValidador.border = 'LineBorder,1,#ff0000'; 
	}
}

/**
 * @properties={typeid:24,uuid:"242CE2F3-771E-437E-8931-D84C669FAEF3"}
 */
function setBorderLineDefault (){
	
	var border = 'LineBorder,1,null';
	elements.txt_digitoValidador.border = border;
	elements.txt_legajo.border = border;
	elements.txt_legajo.border = border; 
	elements.txt_nombre.border = border;
	
}
