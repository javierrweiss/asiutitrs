/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF7117FA-9378-4F59-A632-B46B8464FA2B"}
 */
function onLoad(event) {
	forms.frm_scr_tbc_admision_N.elements.adm_histclin.format = '##########'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47007167-680D-4F34-92F0-6606C42E0D3C"}
 */
function onAction(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_L.foundset.adm_histclin
	globals.vApeyNom=forms.frm_scr_tbc_admision_L.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_L.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_L.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_L.adm_horing
	forms.frm_elige_menu.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E72DD713-1774-4565-8104-9D5E4718482E"}
 */
function onShow_tbc_admision_L(firstShow, event) {
	forms.frm_scr_tbc_admision_L.controller.focusFirstField()
	forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
}
