/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFFFF8A5-51DA-4923-9380-EBC5384362EF"}
 */
function onAction_Scroll_Interven(event) {
	globals.vtipo_aneste_ie=0
	globals.vtipo_ciru_ie=1
	globals.vtipo_instrumentadora_ie=0
	globals.vtipo_neonato_ie=0
	globals.vtipo_partero_ie=0
	globals.vCodigoMedico=forms.frm_scroll_medicos_personal.foundset.medpercod
	switch(globals.vTipoMedico){
		case 1:globals.vtipo_ciru_ie=forms.frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 2:globals.vtipo_partero_ie=forms.frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 3:globals.vtipo_neonato_ie=forms.frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 4:globals.vtipo_aneste_ie=forms.frm_scroll_medicos_personal.foundset.medpertipoie;break;
		case 5:globals.vtipo_instrumentadora_ie=forms.frm_scroll_medicos_personal.foundset.medpertipoie;break;
	}
	globals.vApeynomMedico=forms.frm_scroll_medicos_personal.foundset.medperapeynom
	globals.vTipoIntrumentadora=globals.vtipo_instrumentadora_ie
	//application.closeAllWindows();   
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
