/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"516255CB-EFFB-4F4F-8E98-4C69563396CA"}
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
 * @properties={typeid:24,uuid:"AA5DB82D-6873-4674-95A0-C54A2282A69E"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
