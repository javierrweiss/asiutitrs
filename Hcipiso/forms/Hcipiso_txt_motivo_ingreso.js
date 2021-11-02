/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BD862D2-10FF-4ABA-8ABB-BC34A34387A6"}
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
 * @properties={typeid:24,uuid:"D5AEB390-1932-464C-9FB8-53F8B9CB72EA"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true; 
	return true
}
