/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4823121-4B5C-41AD-9FB9-2302C9BBE3EA"}
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
 * @properties={typeid:24,uuid:"C530367C-298D-43BE-B23E-0F32ABBA68C8"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
