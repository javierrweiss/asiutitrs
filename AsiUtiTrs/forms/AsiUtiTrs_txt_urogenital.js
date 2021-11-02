/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18DA682B-C8D8-4A6C-9F1E-CCEAF7D7549E"}
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
 * @properties={typeid:24,uuid:"53891BA7-5A8B-453A-A038-6115AEB5FEE2"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}
