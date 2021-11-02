/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3A6945D6-925C-4101-AA7D-59A79039009A"}
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
 * @properties={typeid:24,uuid:"65764D5B-1A83-4610-A986-CFAD59FF695E"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Cefalea_frm_principal.$isDirty = true;
	return true
}
