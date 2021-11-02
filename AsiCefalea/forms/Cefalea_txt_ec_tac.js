/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C521669-6869-4B67-AEDD-82C3AA727818"}
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
 * @properties={typeid:24,uuid:"5AEA971D-4584-48E3-A990-9CED710F3878"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
