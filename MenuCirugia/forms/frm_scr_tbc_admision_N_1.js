/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"843D1B6E-E2B9-4A3A-B510-5BC0D7647A19"}
 */
function onRecordSelection_frm_scr_tbc_admision_N(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_N_1.foundset.adm_histclin
	globals.vApeyNom=forms.frm_scr_tbc_admision_N_1.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_N_1.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_N_1.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_N_1.adm_horing
	application.showForm(forms.frm_menu_principal)
}
