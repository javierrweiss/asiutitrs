/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A68D5F9B-F63B-40D6-AA72-FFC9C54D22BE"}
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
 * @properties={typeid:24,uuid:"821CBEF9-7D0F-4FE0-B793-4C19E648AA23"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
