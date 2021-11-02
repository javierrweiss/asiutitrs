/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"71491E06-B040-4947-BE21-2F5627A2E120"}
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
 * @properties={typeid:24,uuid:"B57F2C80-20FF-4544-8431-2A229DAF9920"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.AsiArmTrs_Mod_frm_arm_dia.$isDirty = true;
	return true
}
