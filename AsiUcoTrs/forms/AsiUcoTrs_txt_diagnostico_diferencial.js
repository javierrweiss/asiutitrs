/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A5713C7D-8DAD-4FE9-A1A6-C611D17E2F7D"}
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
 * @properties={typeid:24,uuid:"A2BA751F-AC84-415E-A875-0EE64295EAEF"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
