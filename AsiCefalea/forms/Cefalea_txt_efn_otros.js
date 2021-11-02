/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92EFE395-0F93-44E4-833B-DDB4FDA45285"}
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
 * @properties={typeid:24,uuid:"47A9AB47-3FAF-4318-AC8B-C5A0BF88A098"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
