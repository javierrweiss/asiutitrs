/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F67D7BE2-389C-4DF5-AF84-AB5BDC1BC286"}
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
 * @properties={typeid:24,uuid:"B05C19AA-0E12-4FAF-9A79-45EDF48A50B8"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
