/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26EF7D72-2591-40FB-B843-924584A4A717"}
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
 * @properties={typeid:24,uuid:"FC4691F0-A62E-46CD-8342-09EAA6B8B784"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
