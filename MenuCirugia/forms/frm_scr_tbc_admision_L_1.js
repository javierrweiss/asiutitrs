/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F245ACBF-AF54-46B1-8B76-6BEC03564ADD"}
 */
function onRecordSelection_frm_scr_tbc_admision_L(event) {
	globals.vHiscli=forms.frm_scr_tbc_admision_L_1.foundset.adm_histclin
	globals.vApeyNom=forms.frm_scr_tbc_admision_L_1.foundset.adm_apelnom
	globals.vSexo=forms.frm_scr_tbc_admision_L_1.foundset.adm_sexo
	globals.vFechaIngreso=globals.IntegerToDate(forms.frm_scr_tbc_admision_L_1.foundset.adm_fecing)
	globals.vHoraIngreso=forms.frm_scr_tbc_admision_L_1.adm_horing
	application.showForm(forms.frm_menu_principal)
}
