/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"899FA479-E18C-45B9-995F-B9AA4CC12FDB"}
 */
function onRecordSelection_frm_scr_tbc_admision_L(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_L.foundset.adm_histclin 
	globals.vApeyNom=forms.frm_scr_tbc_admision_L.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_L.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_L.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_L.adm_horing
	application.closeAllWindows()
}
