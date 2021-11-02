/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B986C33-FD86-4D4F-9FBB-5AA52D182AC2"}
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
 * @properties={typeid:24,uuid:"B213DFC2-87EC-4365-9DF6-2F53DA0F7CBE"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
