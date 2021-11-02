
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6973EFB3-0886-46D7-944A-943DDA8EE689"}
 */
function onDataChange_concepto(oldValue, newValue, event) {
	forms.tab_ingresa_otros.elements.btn_graba_item.requestFocus()
	return true
}
