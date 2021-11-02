/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75AE8A09-0270-44DE-AAC3-76837D1C9CC8"}
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
 * @properties={typeid:24,uuid:"EEAD68D5-8888-4882-8BB9-6D1A70B7D401"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
