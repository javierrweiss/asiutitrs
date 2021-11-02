
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3D585F86-FF12-40DA-90CA-DF42CB601D3C"}
 */
function onDataChange_gral(oldValue, newValue, event) {
	forms.frm_datos_facturacion.elements.btn_graba_factu.visible=true
	forms.frm_datos_facturacion.elements.lbl_graba_factu.visible=true
	application.updateUI()
	return true
}
