/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B52EB7E-681E-4175-9BCE-B0FF82CC1329"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.vis_nro_doc.requestFocus()
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4EAEB2A-DDEE-4675-A515-44A1F60D1BDF"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_dni = foundset.vis_nro_doc
	application.getWindow('Busca').hide();
}
