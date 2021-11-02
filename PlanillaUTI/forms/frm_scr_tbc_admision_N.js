/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3646951A-C81A-462C-9E64-5F6D69DA982A"}
 */
function onLoad(event) {
	forms.frm_scr_tbc_admision_N.elements.adm_histclin.format = '##########'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81ACBF4B-9C8F-4031-B53F-68E2B3E81217"}
 */
function onAction(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_N.foundset.adm_histclin
	globals.vApeyNom=forms.frm_scr_tbc_admision_N.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_N.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_N.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_N.adm_horing
	forms.frm_elige_menu.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4DDEA92A-5006-4DAD-B9CE-E152028354D8"}
 */
function onShow_tbc_admision_N(firstShow, event) {
	forms.frm_scr_tbc_admision_N.controller.focusFirstField()
	forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
}
