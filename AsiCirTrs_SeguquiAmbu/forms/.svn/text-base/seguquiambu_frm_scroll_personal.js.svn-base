/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD5CACF5-E32C-4B89-860A-71FADA190558"}
 */
function onAction_Scroll_Interven(event) {
	globals.vCodigoMedicoSegu=forms.frm_scroll_personal_copy.foundset.per_legajo
	globals.vApeynomMedicoSegu=forms.frm_scroll_personal_copy.foundset.per_apelnom
	//var win = application.getWindow()
	//win.hide()
	//application.closeAllWindows();
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
    //controller.show(null);
}
