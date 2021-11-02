/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74DE096D-9BCB-411B-A428-1FC64EE8B67F"}
 */
function onAction_Scroll_Interven(event) {
	globals.protambu1400_vCodigoMedico=foundset.per_legajo
	globals.protambu1400_vApeynomMedico=foundset.per_apelnom
	globals.protambu1400_vTipoIntrumentadora=0
	//application.closeAllWindows();
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
