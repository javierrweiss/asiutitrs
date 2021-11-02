/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"50EB7572-C89E-4A49-9AE1-724FF0B2290A"}
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
 * @properties={typeid:24,uuid:"A23AF3B4-AE43-4B92-B1CA-57A2ABEC2DEB"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.Hcipiso_frm_hist_clin_ingreso_piso.$isDirty = true;
	return true
}
