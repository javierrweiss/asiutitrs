/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E13C2583-8BF0-4B13-93F8-D6322E1E0E4C"}
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
 * @properties={typeid:24,uuid:"F9D51262-0A48-41E0-8112-845FB69D5633"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_Hoja_Evolucion_Uco.$isDirty = true;
	return true
}
