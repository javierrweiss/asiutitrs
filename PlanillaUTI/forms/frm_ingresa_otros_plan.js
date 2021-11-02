
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7CFAD2E8-BDDF-4907-B984-2A3D9CBF46E5"}
 */
function onDataChange_concepto(oldValue, newValue, event) {
	elements.cantidad.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"56CA0B8C-32AC-4DD2-992B-D30048EA64F6"}
 */
function onDataChange_cantidad(oldValue, newValue, event) {
	forms.tab_ingresa_otros_plan.elements.btn_graba_item.requestFocus()
	return true
}
