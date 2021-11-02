/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DB8281A-F74B-41C7-ACB8-F2D050451D8A"}
 */
function onAction_Scroll_Interven(event) {
	forms.protambu_frm_1400.fInterven = foundset.itv_codi
	globals.protambu1400_interven=foundset.itv_codi
	forms.protambu_frm_1400.fdes_interven = foundset.itv_descripcion
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
 * @properties={typeid:24,uuid:"AC274BEE-AED8-48C6-A9FF-EDB099E2AC7E"}
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
