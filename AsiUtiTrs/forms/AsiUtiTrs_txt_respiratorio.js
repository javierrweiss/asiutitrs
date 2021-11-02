/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EEB088C-9BE5-48E9-8AC8-E930DD4DEE46"}
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
 * @properties={typeid:24,uuid:"33A77CFE-2DDF-419F-848E-6736BBF16D1E"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}
