/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D6C59AB9-6203-459C-9B03-0C4131F480E8"}
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
 * @properties={typeid:24,uuid:"386BCA07-29AC-4203-B3FC-487D4A8CEE29"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
