/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F074A28B-0F6C-4290-973F-B27D93E4FCB4"}
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
 * @properties={typeid:24,uuid:"7A29E2A2-A34F-469B-91C6-416133E99651"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}
