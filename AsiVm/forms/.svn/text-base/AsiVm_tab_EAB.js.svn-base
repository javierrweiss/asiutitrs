/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BCDD2A57-FB4F-47B2-B7FC-E3CF39FCED18",variableType:8}
 */
var f_eab_ph = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2328B7AF-606F-43A1-BA05-3ECC84398DF7",variableType:8}
 */
var f_eab_po2=0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"501F4323-2956-41E4-8CDB-D6726CA2E7DE",variableType:8}
 */
var f_eab_pco2=0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78DCBE09-7E84-43B4-BC15-CB186BE595AC",variableType:8}
 */
var f_eab_hco3=0.0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"555AFA6A-49C3-4310-BC7B-C88CDFA8202C",variableType:8}
 */
var f_pao2_fio2 =0.0
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"36E36B20-1262-4FAC-A319-8248F08D090D"}
 */
function onDataChangePh(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	if(newValue!=0){
		globals.valida_rango_campo(6.5,7.6,newValue, oldValue,event,"0")
		if(!globals.errorDato){
			return false
		}else{
			elements.txt_ph.requestFocus()
			return true	
		}
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"17A1AACB-AC75-4F49-B49A-685C4FDF22FD"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_EAB.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_EAB.controller.focusField(tabseq[secActual+1], true);
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
 * @properties={typeid:24,uuid:"58818F39-4D64-49C5-A326-F41F6EA0855B"}
 */
function onDataChangePo2(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,500,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_po2.requestFocus()
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
 * @properties={typeid:24,uuid:"9815288B-6684-454C-90AC-AAA19123A8CC"}
 */
function onDataChangePco2(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,150,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_pco2.requestFocus()
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
 * @properties={typeid:24,uuid:"D1D3883A-6AE3-43DF-BBD8-40A4430CB736"}
 */
function onDataChangeHco3(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_hco3.requestFocus()
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
 * @properties={typeid:24,uuid:"0AD1ECAB-0059-4134-9058-7E9A84795ACD"}
 */
function onDataChangePao2_fio2(oldValue, newValue, event) {
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,1000,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_eab_pao2_fio2.requestFocus()
		return true	
	}}
