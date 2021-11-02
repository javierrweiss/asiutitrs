/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76FBFA95-6A27-431A-A0CD-5E3057B33F12"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.codigo.requestFocus()
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B4DC953-002B-4AA7-BB2E-752685E092E4"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_num_usuario = foundset.per_1
	application.getWindow('Busca_usuario').hide();
}
