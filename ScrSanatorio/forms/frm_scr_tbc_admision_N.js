/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FE7F798-BF7C-4EF0-8250-6681B7244649"}
 */
function onRecordSelection_frm_scr_tbc_admision_N(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_N.foundset.adm_histclin 
	globals.vApeyNom=forms.frm_scr_tbc_admision_N.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_N.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_N.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_N.adm_horing
	forms.frm_menu_principal.controller.show()
}
