/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"945FDD7B-011F-4398-8086-925C082230D5"}
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
 * @properties={typeid:24,uuid:"6B0C4186-3BB9-4971-96A3-D3D90608F9AC"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
