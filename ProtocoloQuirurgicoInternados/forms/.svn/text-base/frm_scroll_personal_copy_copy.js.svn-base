/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81851433-51DD-4A41-9177-521EE8AC8C23"}
 */
function onAction_Scroll_Interven(event) {
	globals.vCodigoMedico=forms.frm_scroll_personal_copy_copy.foundset.per_legajo
	globals.vApeynomMedico=forms.frm_scroll_personal_copy_copy.foundset.per_apelnom
	globals.vTipoIntrumentadora=0
	//application.closeAllWindows();
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
