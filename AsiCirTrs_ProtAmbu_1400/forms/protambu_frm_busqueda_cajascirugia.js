/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1AAC782-D5B0-40D3-A4BD-109E6C6A3EC7"}
 */
function onAction_FIND(event) {
	globals.vCajaAlfa=globals.vCajaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.protambu_frm_scroll_cajascirugia.controller.focusFirstField()
	forms.protambu_frm_scroll_cajascirugia.elements.maeest_nro.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F542E1A-4FD4-4A19-9679-F4D0FB582F04"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	/**
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.removeTableFilterParam("maestros","RESTO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[2,3],"HEMO")
		}else{
			databaseManager.removeTableFilterParam("maestros","HEMO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1],"RESTO")
		}
		
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DDA1E548-6ECA-4E0E-B81C-BD9C790E28A9"}
 */
function onAction_ayuda_busqueda_cajacirugia(event) {
	//globals.textoAyuda='AYUDA-6'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Cajas de Cirugía";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
