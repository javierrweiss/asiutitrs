
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"333232DA-B7D3-4C16-A79A-9CB5448EB458"}
 */
var f_seteo_vni_interfase = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7039FC4B-5749-4310-AB5B-CD56A1BDD4AD"}
 */
var f_seteo_vni_ventilador = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2CF5174B-97AE-4B8C-9771-2E124FA97539"}
 */
var f_seteo_vni_modo = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A7BFDE9-0997-444D-BF32-424BB341BC2E",variableType:8}
 */
var f_seteo_vni_presion_inspiratoria = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"234394AA-3417-4B57-A10C-8EB9EA3F7FEF",variableType:8}
 */
var f_seteo_vni_peep = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC6BFE4C-0F42-4B09-ADAA-767E522AA896",variableType:8}
 */
var f_seteo_vni_frecuencia_respiratoria = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40EDC92E-5833-40BC-9B12-6D81759BEBA2",variableType:8}
 */
var f_seteo_vni_tiempo_inspiratorio = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A69C706-A0D0-4C1A-ADAA-4014008B6FAC",variableType:8}
 */
var f_seteo_vni_fio2 = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8CE5A3E2-A76D-430B-9668-CD2755E5AE13",variableType:4}
 */
var f_seteo_vni_volumen_corriente = 0

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D14E5C7F-215C-4299-A3E7-2FA838C5CEE5"}
 */
function onDataChangeVentilador(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C98B70BC-A775-429C-AAE3-D120623B3871"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_seteo_vni.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_seteo_vni.controller.focusField(tabseq[secActual+1], true);
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
 * @properties={typeid:24,uuid:"1C832E24-00E5-4447-8F82-AB5676981D7C"}
 */
function onDataChangeInterfase(oldValue, newValue, event){
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
 * @properties={typeid:24,uuid:"F128959B-7361-4219-952E-58E6FEF80AF4"}
 */
function onDataChangeModo(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"75A7FC3F-FFD5-4E90-ACE7-089FE1BD228C"}
 */
function onDataChangePresionInsp(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_presion_insp.requestFocus()
		return true	
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8C413CD2-65E5-4BC1-A247-E5B9D7D9F587"}
 */
function onDataChangePeep(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_peep.requestFocus()
		return true	
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"99B2DF3C-ADF7-4D69-A546-AD2036CE0FCC"}
 */
function onDataChangeFrecRespi(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_frec_resp.requestFocus()
		return true	
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2E9F118F-1417-44B7-85EA-1FCB3E0C0BDC"}
 */
function onDataChangeTiempoInspiratorio(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,9999.99,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_tiempo_inspi.requestFocus()
		return true	
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"63637BFE-18F9-43E6-9E1E-146A7D4F67D1"}
 */
function onDataChangeFi02(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_fi02.requestFocus()
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
 * @properties={typeid:24,uuid:"2E4D43CB-E38B-4F6F-BBAB-0B12BF9EFEFD"}
 */
function onDataChangeVolumenCorriente(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_seteo_vni_volumen_corriente.requestFocus()
		return true	
	}
}
