/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87E35E57-A7FE-49CC-8397-87355A3707A4"}
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
 * @properties={typeid:24,uuid:"7687DE9E-34D3-412E-B236-4BC6095DBEAE"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}
