/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F155A401-F344-484D-AC0F-549B8B2B3A1C"}
 */
function onAction_Scroll_Interven(event) {
	globals.vInterven = forms.frm_scroll_interven.itv_codi
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	//var win = application.getWindow()
	//win.hide()
	//application.closeAllWindows();
    //controller.show(null);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24BEBA25-65C2-4CAE-A34F-7F13C0D2E6C6"}
 */
function onShow_scroll_interven(firstShow, event) {
	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	}
}
