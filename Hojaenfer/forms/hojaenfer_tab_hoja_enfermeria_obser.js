/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9978F7FD-63F9-4770-953F-832F18A8D076"}
 */
var hoexlinea = null;


/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"97421856-DED2-441A-A324-5A2D6280E9EA"}
 */
function onDataChange(oldValue, newValue, event) {
	forms.hojaenfer_frm_hoja_enfermeria.$isDirty = true;
	return true
}
