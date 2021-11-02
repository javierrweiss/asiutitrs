/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"449B97FA-A824-45FB-9735-25688802AC30",variableType:8}
 */
var f_cnaf_frecuencia_respiratoria = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2B15BBEE-6E0C-4F27-BDBB-AE8397DBA963",variableType:8}
 */
var f_cnaf_FiO2= 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16F9247B-54A7-4B75-BE32-07DAAFD0FD51",variableType:4}
 */
var f_cnaf_spo2 = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1482D72A-CE5E-4CA5-B7C7-94E7C371E9D4",variableType:4}
 */
var f_cnaf_flujo = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61C7FF64-0590-43B8-98EE-3A3D1C942891",variableType:8}
 */
var f_cnaf_indice_rox = 0.0


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C0267CB9-A28E-4F6B-8825-FFFEB8F6C0E5"}
 */
var f_cnaf_equipo = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63033308-FD97-4CDE-BC84-9D520FAB4760",variableType:4}
 */
var f_cnaf_presencia_secrecion = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD1CCD07-EF8B-4F46-912A-4EC1B4DA131C",variableType:4}
 */
var f_cnaf_empleo_musculo_acc = 0


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"564FD4C3-8846-4BE7-8947-F28647572CEB"}
 */
var f_cnaf_tamanio_canula='';

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D30244B4-5E87-477F-B898-CBF81730EB49"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_cnaf.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_cnaf.controller.focusField(tabseq[secActual+1], true);
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
 * @properties={typeid:24,uuid:"8A024B04-43FD-415A-8255-57AA6C90F6E1"}
 */
function onDataChangeFrecuenciaRespiratorio(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	calcularIndiceRox()
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_cnaf_frecuencia_resp.requestFocus()
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
 * @properties={typeid:24,uuid:"633A7538-4756-4164-823E-DE53289924BF"}
 */
function onDataChangeFlujo(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_cnaf_flujo.requestFocus()
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
 * @properties={typeid:24,uuid:"2C6A84E8-6F25-44B7-970F-7924B102DFC3"}
 */
function onDataChangeFio02(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	calcularIndiceRox()
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_cnaf_fio2.requestFocus()
		return true	
	}
}


/**
 * @properties={typeid:24,uuid:"C7749AB0-1FF8-45E0-9B23-0FBB007F9602"}
 */
function calcularIndiceRox(){
	if(f_cnaf_frecuencia_respiratoria!=0 && f_cnaf_FiO2!=0 && f_cnaf_spo2!=0){
		f_cnaf_indice_rox= (f_cnaf_spo2/f_cnaf_FiO2) * f_cnaf_frecuencia_respiratoria
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
 * @properties={typeid:24,uuid:"E2A9250C-055C-465C-B136-174D8FD719A9"}
 */
function onDataChangeTamanioCanula(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"5D8970B8-6149-4EA4-81E4-3817B3888504"}
 */
function onDataChangeEquipo(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"38F7F5B0-3E98-474C-8EE5-CB3414A30F7A"}
 */
function onDataChangeSpo2(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	calcularIndiceRox()
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_cnaf_spo2.requestFocus()
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
 * @properties={typeid:24,uuid:"CE3811BA-B9AC-4E00-92A0-6D3C53BA9CB8"}
 */
function onDataChangeIndiceRox(oldValue, newValue, event) {
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_cnaf_indice_rox.requestFocus()
		return true	
	}
}
