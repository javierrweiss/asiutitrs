/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4152FEAA-28AB-4443-AE7E-F9ED4864528D"}
 */
function onAction_Scroll_Interven(event) {
	globals.vCaja = forms.frm_scroll_cajascirugia.maeest_nro
	//var win = application.getWindow()
	//win.hide()
	//application.closeAllWindows();
    //controller.show(null);
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
