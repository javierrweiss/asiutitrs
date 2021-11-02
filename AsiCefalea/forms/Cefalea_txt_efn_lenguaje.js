/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E2B83FF3-1ECD-48A3-BB07-5293AF948D80"}
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
 * @properties={typeid:24,uuid:"AC11F264-2275-4403-A9D8-760E946E2591"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
