/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8438553D-87B3-4268-A7C1-0CBBD231A25B"}
 */
function onAction_Scroll_Interven(event) {
	globals.vtipo_aneste_ie=0
	globals.vtipo_ciru_ie=1
	globals.vtipo_instrumentadora_ie=0
	globals.vtipo_neonato_ie=0
	globals.vtipo_partero_ie=0
	globals.protambu1400_vCodigoMedico=forms.protambu_frm_scroll_medicos_personal.foundset.medpercod
	switch(globals.vTipoMedico){
		case 1:globals.vtipo_ciru_ie=forms.protambu_frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 2:globals.vtipo_partero_ie=forms.protambu_frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 3:globals.vtipo_neonato_ie=forms.protambu_frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 4:globals.vtipo_aneste_ie=forms.protambu_frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 5:globals.vtipo_instrumentadora_ie=forms.protambu_frm_scroll_medicos_personal.foundset.medpertipoie;break;
	}
	globals.protambu1400_vApeynomMedico=forms.protambu_frm_scroll_medicos_personal.foundset.medperapeynom
	globals.protambu1400_vTipoIntrumentadora=globals.vtipo_instrumentadora_ie
	//application.closeAllWindows();   
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
