/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E96312F-EA34-486D-8468-0D7CE364AD84"}
 */
function onAction_Scroll_Interven(event) {
	globals.vInterven = forms.frm_scroll_interven_copy.itv_codi
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84315451-C278-4EAA-86BD-7139224CBEAA"}
 */
function onShow_scroll_interven(firstShow, event) {
//	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			//application.output("paso 3")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	//}
}
