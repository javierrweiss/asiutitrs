/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DFFC577-F437-4D39-9378-5A041C1C6A8C",variableType:8}
 */
var f_vm_seteo_frecuencia_respiratoria = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"03240A1B-5458-4F34-932F-8F8B9A830538",variableType:8}
 */
var f_vm_seteo_presion_inspiratoria = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"871AED8A-52C0-48B8-B1DB-9E98C375BE66",variableType:8}
 */
var f_programacion_presion_soporte = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"328D2B5F-1ADB-4CDE-8A7D-009EC5586746",variableType:8}
 */
var f_vm_seteo_flujo = 0.0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0D39BE5-F094-4B8C-BCCC-2A31B950B876",variableType:8}
 */
var f_vm_seteo_tiempo_inspiratorio = 0.0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A379FCF1-2634-4D3C-BB5D-BBD873145E81",variableType:8}
 */
var f_vm_seteo_pausa = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61D8B138-CCB1-47AD-851C-02F6DC0EA103",variableType:8}
 */
var f_programacion_tiempo_inspiratorio = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1474A3AB-5852-46FF-8685-27300572A5E4",variableType:8}
 */
var f_vm_seteo_FiO2= 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3680DE60-084F-4470-B7B3-6E2CC934578B",variableType:8}
 */
var f_vm_seteo_peep= 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"995D45CD-0DEC-4FDA-B832-6B47C473C6C7",variableType:8}
 */
var f_vm_seteo_volumen_corriente=0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB2E87FA-8970-4E99-80EC-243C7CAF6253",variableType:4}
 */
var f_presion_inspiratoria=0;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29393209-6C82-4127-893B-D8E29E307FCC",variableType:4}
 */
var f_presion_soporte = 0;
 


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82B6F4AE-EA23-404E-BF44-B8673FA0E954",variableType:4}
 */
var f_tiempo_inspiratorio=0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89EFB3F0-66AA-48A4-95C9-D80AF807EA42",variableType:4}
 */
var f_peep = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"735050EF-7D30-4742-A70E-3B96D5EB5F53",variableType:4}
 */
var f_equipo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC52FF18-A33F-40AC-80D8-1D26C3318CB9",variableType:4}
 */
var f_tamaño_canula=0;
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"50C272EE-F598-44F7-BD38-87CA94FB2CED"}
 */
function onDataChangeTiempoInspiratorio(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,2,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_tiempo_inspiratorio.requestFocus()
		return true	
	}
	
}

///**
// * Handle changed data.
// *
// * @param {String} oldValue old value
// * @param {String} newValue new value
// * @param {JSEvent} event the event that triggered the action
// *
// * @returns {Boolean}
// *
// * @properties={typeid:24,uuid:"38F93B38-8713-413B-BCAB-980EA2581610"}
// */
//function onDataChangePresionSoporte(oldValue, newValue, event) {
//	// TODO Auto-generated method stub
//	forms.AsiVm_Monitoreo.$isDirty=true
//	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
//	if(!globals.errorDato){
//		return false
//	}else{
//		elements.txt_seteo_presion_soporte.requestFocus()
//		return true	
//	}
//}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BD4DFCEE-DD72-4FC8-BC41-304BADDF3994"}
 */
function onDataChangePresionInspiratorio(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_presion_inspiratoria.requestFocus()
		return true	
	}
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
 * @properties={typeid:24,uuid:"1BC3E6B3-6049-40AB-B46C-DF1B142A7996"}
 */
function onDataChangePeep(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_peep.requestFocus()
		return true	
	}
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
 * @properties={typeid:24,uuid:"25AA4384-6F45-420C-BB07-492B5EC9ABF4"}
 */
function onDataChangeVolumenCorriente(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	forms.AsiVm_tab_Monitoreo_VM.calculateCompliance()
	
	globals.valida_rango_campo(0,1000,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_volumen_corriente.requestFocus()
		return true	
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0449261D-999F-4A3D-B6B1-3DC9479ADF7D"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_seteo_vm.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_seteo_vm.controller.focusField(tabseq[secActual+1], true);
	}
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
 * @properties={typeid:24,uuid:"BBBF9F4B-7791-4683-B4C2-9870DEF71774"}
 */
function onDataChangeFrecuenciaRespiratorio(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_frecuencia_resp.requestFocus()
		return true	
	}
	
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
 * @properties={typeid:24,uuid:"BD338B5D-B6E6-44A6-B4AB-498F3853EBD6"}
 */
function onDataChangeFlujo(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,9999.99,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_flujo.requestFocus()
		return true	
	}
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
 * @properties={typeid:24,uuid:"5C36EEA1-75F4-434A-92D2-49F9B520B0F2"}
 */
function onDataChangeFio02(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_fio2.requestFocus()
		return true	
	}
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
 * @properties={typeid:24,uuid:"271EC946-2C39-4AB2-AA95-539EE5AF1504"}
 */
function onDataChangeTamanioCanula(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
}


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C7B2F07-0D82-4AB5-8101-219948A093EA"}
 */
var f_vm_seteo_modo_ventilatorio = ''
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"27C924BA-5DC9-4166-B697-1B4386BAAE8E"}
 */
function onDataChangeEquipo(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
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
 * @properties={typeid:24,uuid:"4B09DF9D-7C44-4C81-B0E4-77123B8C79F7"}
 */
function onDataChangePausa(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,1,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_pausa.requestFocus()
		return true	
	}
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
 * @properties={typeid:24,uuid:"77B28F57-EFC8-44FB-A88E-B2A602591D1F"}
 */
function onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
}
