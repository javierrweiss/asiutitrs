/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A29B807E-07C5-4546-B719-08A9B86A1C59"}
 */
var f_informe = null;


/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"83AAAB03-2004-477F-958C-56FA65478BBF"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
