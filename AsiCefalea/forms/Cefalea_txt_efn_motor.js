/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"699646C0-1028-4BD9-B245-24501BF85EDD"}
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
 * @properties={typeid:24,uuid:"9EB71D4F-4B32-4C8A-A6B3-627ECB5B9390"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
