/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7F51F99E-E16B-4B74-864F-6F277C9EB762",variableType:4}
 */
var frm_campo_N1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F03C1FFC-4D55-4E27-9DB8-C59E87448599",variableType:4}
 */
var frm_campo_N2 = 0;

/** 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"EAFBEC22-3F00-44E7-8549-C8CA5218EF42"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	frm_campo_N1 = 0
	frm_campo_N2 = 0
	forms.frm_scr_med_per.filtra()
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
 * @properties={typeid:24,uuid:"C08BFBD5-464A-446D-8805-BA4A37A991FF"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_med_per.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
