
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD031DBE-3380-4429-A788-B01C0B930FA1",variableType:4}
 */
var f_varios_sat = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAACD441-7572-4372-AD24-402D784A7F91",variableType:4}
 */
var f_varios_exito = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FC588B63-A8A8-4274-ADAA-1D4B04074B7A",variableType:4}
 */
var f_varios_pre = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D8AC8E6-A3E8-488A-B6E9-5C94A998FB7D",variableType:4}
 */
var f_varios_eot = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64A706AF-D242-430F-AD3F-C759A34F6F27",variableType:4}
 */
var f_varios_dialisis = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5304753-91CD-470B-AA5B-64EB8D49E210",variableType:4}
 */
var f_varios_aspirado_traqueal = 0


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F41135F-D802-4CDA-8207-E780A19D6504",variableType:4}
 */
var f_varios_balance_diario = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AF77420-E415-4964-B69A-86985DE23B10",variableType:8}
 */
var f_varios_sofa_diario = 0.0
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"15B8E68B-CECC-48E3-B6DC-03E379673C8F"}
 */
function onDataChangeSofaDiario(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_sofa.requestFocus()
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
 * @properties={typeid:24,uuid:"74FD1FD5-4928-4540-9B9C-2A6F36A2DA55"}
 */
function onDataChangeBalanceDiario(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	globals.valida_rango_campo(-9999,9999,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.txt_balance_diario.requestFocus()
		return true	
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5379A541-E158-41CF-82FD-39B91739DE4A"}
 */
function onActionEnterSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.AsiVm_tab_Varios.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.AsiVm_tab_Varios.controller.focusField(tabseq[secActual+1], true);
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
 * @properties={typeid:24,uuid:"46D2252C-D185-4C7C-AB85-09E9DF898081"}
 */
function onDataChangeAspiradoTraqueal(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"16CC0FA3-0CFA-4861-AD93-2CE47D64C95D"}
 */
function onDataChangeSat(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"752FFECE-0297-4575-AF77-64A763928023"}
 */
function onDataChangePre(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"795C271C-71F8-48FB-A13F-C81BC630F998"}
 */
function onDataChangeExito(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"AB264418-2749-41C8-A690-92B4919CB6A2"}
 */
function onDataChangeEot(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"762EABEC-B17A-409E-9314-5FE83DDB59A1"}
 */
function onDataChangeDialisis(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.AsiVm_Monitoreo.$isDirty=true
	return true
}


