/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E46BCDC-947E-416C-AA96-1E6BE40E01B6"}
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
 * @properties={typeid:24,uuid:"D570C602-3EBF-47ED-AC71-547419B48F77"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
