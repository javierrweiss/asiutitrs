/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5261A0A-86E4-40BA-8C5D-2A717B6762BF"}
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
 * @properties={typeid:24,uuid:"7B97F70D-5BF3-4FC5-A027-41C3E3BAF3AB"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
