/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5F22540F-E424-4914-905C-E89A2111A509"}
 */
function onDataChange_check(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
