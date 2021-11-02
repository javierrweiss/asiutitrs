
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A4D29079-F832-47DF-A5D3-B24DA0D4646D"}
 */
function onDataChange_gral(oldValue, newValue, event) {
	forms.frm_datos_facturacion.elements.btn_graba_factu.visible=true
	forms.frm_datos_facturacion.elements.lbl_graba_factu.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DC2A613-4D96-415F-BF20-3572EDBE9706"}
 */
function onAction_campo_gral(event) {
	switch (event.getElementName()){
	case 'perse_nropol':elements.perse_ciaseg.requestFocus();break;
	case 'perse_ciaseg':elements.perse_vigdes.requestFocus();break;
	case 'perse_vigdes':elements.perse_vighas.requestFocus();break;
	case 'perse_vighas':elements.perse_polmon.requestFocus();break;
	case 'perse_polmon':elements.perse_polpes.requestFocus();break;
	}
}
