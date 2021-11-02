/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B2A36C3-9889-425E-910F-A2A962DAEC3E",variableType:4}
 */
var f_monitoreo_frec_respiratoria_total = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E842D82F-7B68-488F-8282-1B7B254E6B65",variableType:8}
 */
var f_monitoreo_presion_pico = 0.0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A7E3166-8032-49A6-967E-45AA8D8BECFA",variableType:8}
 */
var f_monitoreo_presion_plateau = 0.0



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C36E45E5-1F95-4A26-B934-DADAB34E75DA",variableType:8}
 */
var f_monitoreo_presion_media = 0.0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84AC33D8-517A-425B-BE68-D262EB731520",variableType:8}
 */
var f_monitoreo_peep_total = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"52E37D70-F487-4D9F-8811-A4778FED90C8",variableType:4}
 */
var f_monitoreo_delta_presion = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"690C39AC-AC31-41BF-8FFA-46607A3AF94E",variableType:8}
 */
var f_monitoreo_p01= 0.0
	

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CD4FBBD-4DD6-45B6-9754-843CFEE9588F",variableType:8}
 */
var f_monitoreo_volumen_corriente_exhalado = 0.0
	
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D609647-27EE-4BEB-8079-FA8A6C59FB2E",variableType:8}
 */
var f_monitoreo_compliance = 0.0
	
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"224D1E43-8DB0-43D7-BC65-373137ADF1C0",variableType:8}
 */
var f_monitoreo_resistencia = 0.0
	
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A545816C-7165-4CAC-88AA-21B253602E2E",variableType:8}
 */
var f_monitoreo_pmi = 0.0
	
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C26CF09E-8BB8-4308-9CF5-7C6898FF13CA",variableType:8}
 */
var f_monitoreo_presion_oclusion=0.0
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"270B864A-1737-498D-B1FC-FFCC91E41E6B"}
 */
function onDataChangeVolumenCorriente(oldValue, newValue, event) {
	// TODO Auto-generated method stub

	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,1000,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_volumen_corriente_exhalado.requestFocus()
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
 * @properties={typeid:24,uuid:"043BAAF8-2B8B-4C07-BD78-5FAEEC52A8CB"}
 */
function onDataChangeResistencia(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_resistencia.requestFocus()
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
 * @properties={typeid:24,uuid:"87F62FD9-9525-40FE-A481-4B5554A3DF29"}
 */
function onDataChangePresionPlateau(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	calculateCompliance()
	calculateDeltaPressure();
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		
		elements.txt_presion_plateau.requestFocus()
		return true	
	}
	
}

/**
 * @properties={typeid:24,uuid:"9123B63F-85B9-4809-960D-CB378371FD67"}
 */
function calculateDeltaPressure(){
	if(f_monitoreo_presion_plateau!=0 && !globals.IsBlank(f_monitoreo_presion_plateau.toString()) && !globals.IsBlank(f_monitoreo_peep_total.toString()) && f_monitoreo_peep_total!=0){
		f_monitoreo_delta_presion= f_monitoreo_presion_plateau-f_monitoreo_peep_total
	}
}

/**
 * @properties={typeid:24,uuid:"87F43B53-F812-49D0-89FB-7F53D7F618E4"}
 */
function calculateCompliance(){
	if(forms.AsiVm_tab_seteo_vm.f_vm_seteo_volumen_corriente!=0 && !globals.IsBlank(forms.AsiVm_tab_seteo_vm.f_vm_seteo_volumen_corriente.toString()) && 
			!globals.IsBlank(f_monitoreo_delta_presion.toString()) &&
			f_monitoreo_delta_presion!=0){
				
		f_monitoreo_compliance= forms.AsiVm_tab_seteo_vm.f_vm_seteo_volumen_corriente/f_monitoreo_delta_presion
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
 * @properties={typeid:24,uuid:"9CF31657-9BF5-4227-85B7-27EF2CA2E5C0"}
 */
function onDataChangePresionPico(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_presion_pico.requestFocus()
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
 * @properties={typeid:24,uuid:"A37E3F29-BB11-4637-A716-9AFC99D4370C"}
 */
function onDataChangePresionOclusion(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
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
 * @properties={typeid:24,uuid:"D0BC0531-8FD4-4F8F-809D-1B740BCFF6AC"}
 */
function onDataChangePresionMedia(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_presion_media.requestFocus()
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
 * @properties={typeid:24,uuid:"73958B58-6BB1-4CDE-B7DE-71E9C9F88E43"}
 */
function onDataChangePmi(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_pmi.requestFocus()
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
 * @properties={typeid:24,uuid:"788DEAD4-E0E7-449E-9580-1E5E648C3DB3"}
 */
function onDataChangeCompliance(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_compliance.requestFocus()
		return true	
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E8683927-78B2-46F9-AE50-0D791456F0EC"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_Monitoreo_VM.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_Monitoreo_VM.controller.focusField(tabseq[secActual+1], true);
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
 * @properties={typeid:24,uuid:"AEBF5AF4-FA3E-478E-BDA0-F7AFA5B9679E"}
 */
function onDataChangeDeltaPresion(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	calculateCompliance()
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_delta_presion.requestFocus()
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
 * @properties={typeid:24,uuid:"49EEEBBE-65B7-4E77-A079-E370101C25C4"}
 */
function onDataChangeFrecuenciaRespiratoriaTotal(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_frecuencia_respi_total.requestFocus()
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
 * @properties={typeid:24,uuid:"6E12854C-E8B7-4308-97B6-13A0DF1027BC"}
 */
function onDataChangeP01(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_p01.requestFocus()
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
 * @properties={typeid:24,uuid:"05E6C762-4BF6-4655-8E50-91685D91A08A"}
 */
function onDataChangePeepTotal(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	calculateDeltaPressure();
	calculateCompliance()
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		
		elements.txt_peep_total.requestFocus()
		return true	
	}
	
}
