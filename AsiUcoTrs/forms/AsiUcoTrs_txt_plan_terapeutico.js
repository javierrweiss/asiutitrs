/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3323D3EF-0264-47C6-B10B-5FB985539A9B"}
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
 * @properties={typeid:24,uuid:"E3BFAC78-383B-444A-B879-AB969F22A848"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
