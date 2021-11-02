/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4AC2BD92-C8FF-4B45-81E0-64A8728052EE"}
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
 * @properties={typeid:24,uuid:"6F6E4E3B-B534-4891-8953-6B7B67CA5248"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
